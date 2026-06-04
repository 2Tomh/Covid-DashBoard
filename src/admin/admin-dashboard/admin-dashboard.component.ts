import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin/admin.service';
import { MainMetricsUploadService } from '../services/main-metrics-upload/main-metrics-upload.service';
import { ChildMorbidityUploadService } from '../services/child-morbidity-upload/child-morbidity-upload.service';
import { VaccineImpactUploadService } from '../services/vaccine-impact-upload/vaccine-impact-upload.service';
import { DeathUploadService } from '../services/death-upload/death-upload.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  adminProfile: any = null;
  latestData: any[] = [];
  recentCases: any[] = [];
  isLoading = false;

  showModal = false;
  modalTitle = '';
  selectedData: any = {};

  categories = [
    { key: 'mainMetricsDaily', label: 'מאומתים יומי' },
    { key: 'childMorbidity', label: 'תחלואת ילדים' },
    { key: 'vaccinationDaily', label: 'חיסונים' },
    { key: 'deathsDaily', label: 'נפטרים' }
  ];
  selectedCategory = 'mainMetricsDaily';

  constructor(
    private adminService: AdminService,
    private mainMetricsService: MainMetricsUploadService,
    private childMorbidityService: ChildMorbidityUploadService,
    private vaccinationService: VaccineImpactUploadService,
    private deathService: DeathUploadService
  ) { }

  ngOnInit(): void {
    this.adminService.getProfile().subscribe(p => this.adminProfile = p);
    this.loadData();        
    this.loadRecentCases(); 
  }

  loadRecentCases() {
    this.adminService.getAllCases().subscribe({
      next: (cases) => this.recentCases = cases,
      error: (err) => console.error('Error fetching cases:', err)
    });
  }

  loadData() {
    this.isLoading = true;
    let fetchObservable;

    switch (this.selectedCategory) {
      case 'mainMetricsDaily': fetchObservable = this.mainMetricsService.getDaily(); break;
      case 'childMorbidity': fetchObservable = this.childMorbidityService.getAll(); break;
      case 'vaccinationDaily': fetchObservable = this.vaccinationService.getDaily(); break;
      case 'deathsDaily': fetchObservable = this.deathService.getDaily(); break;
    }

    if (fetchObservable) {
      fetchObservable.subscribe({
        next: (data) => {
          this.latestData = data;
          this.isLoading = false;
        },
        error: () => {
          this.latestData = [];
          this.isLoading = false;
        }
      });
    }
  }

  openCaseModal(existingCase?: any) {
    this.modalTitle = existingCase ? 'עריכת מקרה קורונה' : 'הוספת מקרה חדש';

    if (existingCase) {
      this.selectedData = { ...existingCase };
    } else {
      const today = new Date().toLocaleDateString('he-IL'); 
      this.selectedData = {
        name: '',
        condition: 'קל',
        city: '',
        date: today 
      };
    }
    this.showModal = true;
  }

  handleSave(updatedData: any) {
    this.showModal = false;

    const dataToSend = { ...updatedData };
    if (dataToSend.date && dataToSend.date.includes('/')) {
      const parts = dataToSend.date.split('/');
      const d = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]), 12, 0, 0);
      dataToSend.date = d.toISOString();
    } else {
      dataToSend.date = new Date().toISOString();
    }

    dataToSend.ageGroup = Number(dataToSend.ageGroup || 0);
    dataToSend.doseCount = Number(dataToSend.doseCount || 0);
    dataToSend.isVaccinated = Boolean(dataToSend.isVaccinated);

    const id = dataToSend.id || dataToSend._id;

    if (id && id !== 0) {
      this.adminService.updateCase(id, dataToSend).subscribe({
        next: () => this.loadRecentCases(),
        error: (err) => console.error('Update Error Details:', err.error)
      });
    } else {
      delete dataToSend.id; 

      this.adminService.addCase(dataToSend).subscribe({
        next: () => this.loadRecentCases(),
        error: (err) => {
          console.error('Validation Error Details:', err.error.errors);
          alert('שגיאת ולידציה בשרת. בדוק את ה-Console בדפדפן.');
        }
      });
    }
  }
  deleteCase(id: string) {
    if (confirm('האם אתה בטוח שברצונך למחוק מקרה זה?')) {
      this.adminService.deleteCase(id).subscribe(() => {
        this.loadRecentCases();
      });
    }
  }

  onCategoryChange(key: string) {
    this.selectedCategory = key;
    this.loadData();
  }

  getTableHeaders(): string[] {
    return this.latestData.length > 0 ? Object.keys(this.latestData[0]).filter(k => k !== 'id' && k !== '_id') : [];
  }

  get selectedCategoryLabel(): string {
    return this.categories.find(c => c.key === this.selectedCategory)?.label || '';
  }
}
