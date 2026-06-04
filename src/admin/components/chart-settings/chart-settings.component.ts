import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { ChartSettingsService } from '../../services/Chart-Settings/chart-settings.service';
import { ChildMorbidityUploadService } from '../../services/child-morbidity-upload/child-morbidity-upload.service';
import { VaccineImpactUploadService } from '../../services/vaccine-impact-upload/vaccine-impact-upload.service';
import { DeathUploadService } from '../../services/death-upload/death-upload.service';
import { TestingUploadService } from '../../services/testing-upload/testing-upload.service';
import { AdditionalInvestigationsUploadService } from '../../services/additional-investigations-upload/additional-investigations-upload.service';
import { RecoveryCasesUploadService } from '../../services/recovery-cases-upload/recovery-cases-upload.service';
import { PopulationVaccinationUploadService } from '../../services/population-vaccination-upload/population-vaccination-upload.service';
import { MainMetricsUploadService } from '../../services/main-metrics-upload/main-metrics-upload.service';
import { UploadLogService } from '../../services/upload-log/upload-log.service';
import { AuthService } from '../../services/auth/auth.service';
import { AdminService } from '../../services/admin/admin.service';

import { MainMetricsService } from '../../../app/main/services/main-metrics.service';
import { ChildMorbidityService } from '../../../app/main/services/child-morbidity.service';
import { VaccineImpactService } from '../../../app/main/services/vaccine-impact.service';
import { DeathsService } from '../../../app/main/services/deaths.service';
import { TestingService } from '../../../app/main/services/testing.service';
import { AdditionalInvestigationsService } from '../../../app/main/services/additional-investigations.service';
import { RecoveryCasesService } from '../../../app/main/services/recovery-cases.service';
import { PopulationVaccinationService } from '../../../app/main/services/population-vaccination.service';

import { ChartSettingsInterface } from '../../interfaces/chart-settings-interface';
import { ChartConfig } from '../../interfaces/chart-config';

@Component({
  selector: 'app-chart-settings',
  templateUrl: './chart-settings.component.html',
  styleUrls: ['./chart-settings.component.css']
})
export class ChartSettingsComponent implements OnInit {
  charts: ChartConfig[] = [
    // {
    //   name: 'מגמת ילדים מאומתים – ממוצע נע 7 ימים',
    //   label: 'מגמת ילדים מאומתים – ממוצע נע 7 ימים',
    //   uploadType: 'childMorbidity',
    //   series: [
    //     { key: 'positive', label: 'מאומתים' },
    //     { key: 'hospitalized', label: 'מאושפזים' }
    //   ]
    // },
    {
      name: 'השפעת התחסנות על התחלואה',
      label: 'השפעת התחסנות על התחלואה-מאומתים יומי התחסנות',
      uploadType: 'vaccineImpact',
      series: [
        { key: 'protected', label: 'מוגנים' },
        { key: 'unprotected', label: 'לא מוגנים' }
      ]
    },
    // {
    //   name: 'נפטרים יומי',
    //   label: 'נפטרים יומי',
    //   uploadType: 'deathsDaily',
    //   series: [{ key: 'count', label: 'נפטרים' }]
    // },
    // {
    //   name: 'נפטרים יומי – מצב התחסנות',
    //   label: 'נפטרים יומי – מצב התחסנות',
    //   uploadType: 'deathsVaccinationStatus',
    //   series: [{ key: 'count', label: 'כמות' }]
    // },
    // {
    //   name: 'אחוז נבדקים חיוביים ',
    //   label: 'אחוז נבדקים חיוביים ',
    //   uploadType: 'testingPositivity',
    //   series: [{ key: 'positiveRate', label: 'אחוז חיוביים' }]
    // },
    // {
    //   name: 'מספר נבדקים לפי קבוצות גיל',
    //   label: 'מספר נבדקים לפי קבוצות גיל',
    //   uploadType: 'testingAgeGroups',
    //   series: [{ key: 'count', label: 'כמות' }]
    // },
    // {
    //   name: 'מספר בדיקות קורונה - יומי ',
    //   label: 'מספר בדיקות קורונה - יומי ',
    //   uploadType: 'testingVolume',
    //   series: [{ key: 'count', label: 'סה"כ בדיקות' }]
    // },
    // {
    //   name: 'תחקור תחלואה לאור אירועים והתחסנות',
    //   label: 'תחקור תחלואה לאור אירועים והתחסנות',
    //   uploadType: 'additionalInvestigationsDaily',
    //   series: [{ key: 'count', label: 'חקירות' }]
    // },
    // {
    //   name: 'מחלימים יומי ',
    //   label: 'מחלימים יומי ',
    //   uploadType: 'recoveryDaily',
    //   series: [{ key: 'count', label: 'מחלימים' }]
    // },
    // {
    //   name: 'תחלואה חוזרת לפי התחסנות - יומי',
    //   label: 'תחלואה חוזרת לפי התחסנות - יומי'
    //   , uploadType: 'recoveryVaccination',
    //   series: [{ key: 'count', label: 'כמות' }]
    // },
    // {
    //   name: 'תחלואה חוזרת - גיל והתחסנות',
    //   label: 'תחלואה חוזרת - גיל והתחסנות',
    //   uploadType: 'recoveryVaccinationAgeGroups',
    //   series: [{ key: 'count', label: 'כמות' }]
    // },
    // {
    //   name: 'חיסונים יומי',
    //   label: 'חיסונים יומי',
    //   uploadType: 'vaccinationDaily',
    //   series: [
    //     { key: 'dose1', label: 'מנה 1' },
    //     { key: 'dose2', label: 'מנה 2' },
    //     { key: 'dose3', label: 'מנה 3' }
    //   ]
    // },
    // {
    //   name: 'חיסונים מצטבר',
    //   label: 'חיסונים מצטבר',
    //   uploadType: 'vaccinationCumulative',
    //   series: [{ key: 'count', label: 'סה"כ מחוסנים' }]
    // },
    // {
    //   name: 'חיסונים לפי קבוצות גיל',
    //   label: 'חיסונים לפי קבוצות גיל',
    //   uploadType: 'vaccinationAgeGroups',
    //   series: [{ key: 'count', label: 'כמות' }]
    // },
    {
      name: 'מדדים מרכזיים',
      label: 'מדדים מרכזיים- מאומתים חדשים יומיים',
      uploadType: 'mainMetricsDaily',
      series: [{ key: 'value', label: 'ערך' }]
    },
    {
      name: 'מדדים מרכזיים',
      label: 'מדדים מרכזיים -ממוצע מאומתים שבועיים',
      uploadType: 'mainMetricsWeekly',
      series: [{ key: 'value', label: 'ערך' }]
    },
    // {
    //   name: 'חיסונים יומי',
    //   label: 'חיסונים יומי',
    //   uploadType: 'vaccinationDaily',
    //   series: [
    //     { key: 'dose1', label: 'מנה 1' },
    //     { key: 'dose2', label: 'מנה 2' },
    //     { key: 'dose3', label: 'מנה 3' },
    //     { key: 'dose4', label: 'מנה 4' } 
    //   ]
    // },
    // {
    //   name: 'חיסונים לפי קבוצות גיל',
    //   label: 'חיסונים לפי קבוצות גיל',
    //   uploadType: 'vaccinationAgeGroups',
    //   series: [
    //     { key: 'dose1Percentage', label: 'לא מחוסנים' },
    //     { key: 'dose2Percentage', label: 'מחוסנים ללא תוקף' },
    //     { key: 'dose3Percentage', label: 'מחוסנים' }
    //   ]
    // },
    // {
    //   name: 'חיסונים מצטבר',
    //   label: 'חיסונים מצטבר',
    //   uploadType: 'vaccinationCumulative',
    //   series: [
    //     { key: 'dose1Percentage', label: 'לא מחוסנים' },
    //     { key: 'dose2Percentage', label: 'מחוסנים ללא תוקף' },
    //     { key: 'dose3Percentage', label: 'מחוסנים' }
    //   ]
    // },
  ];

  selectedChart: ChartConfig;
  settings: ChartSettingsInterface;
  loading = false;
  saved = false;
  statusMessage = '';
  adminProfile: any = null;
  uploadLog: { id: number, fileName: string, uploadedAt: string } | null = null;
  latestData: any[] = [];
  @Output() onClose = new EventEmitter<void>();
  constructor(
    private service: ChartSettingsService,
    private childMorbidityUpload: ChildMorbidityUploadService,
    private vaccineImpactUpload: VaccineImpactUploadService,
    private deathUpload: DeathUploadService,
    private testingUpload: TestingUploadService,
    private additionalInvestigationsUpload: AdditionalInvestigationsUploadService,
    private recoveryCasesUpload: RecoveryCasesUploadService,
    private populationVaccinationUpload: PopulationVaccinationUploadService,
    private mainMetricsUpload: MainMetricsUploadService,
    private uploadLogService: UploadLogService,
    private router: Router,
    private authService: AuthService,
    private adminService: AdminService,
    private mainMetricsData: MainMetricsService,
    private childMorbidityData: ChildMorbidityService,
    private vaccineImpactData: VaccineImpactService,
    private deathData: DeathsService,
    private testingData: TestingService,
    private investigationsData: AdditionalInvestigationsService,
    private recoveryData: RecoveryCasesService,
    private populationData: PopulationVaccinationService
  ) {
    this.selectedChart = this.charts[0];
    this.settings = this.emptySettings();
  }
  goBack() {
    this.onClose.emit();
  }

  onOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.goBack();
    }
  }
  ngOnInit() {
    this.loadSettings();
    this.loadUploadLog();
    this.loadTableData();
    this.adminService.getProfile().subscribe(p => this.adminProfile = p);
  }

  get selectedCategoryLabel(): string {
    return this.selectedChart ? this.selectedChart.label : '';
  }

  onChartChange() {
    this.settings = this.emptySettings();
    this.statusMessage = '';
    this.loadSettings();
    this.loadUploadLog();
    this.loadTableData();
  }

  loadTableData() {
    if (!this.selectedChart.uploadType) return;
    const data$ = this.getDataObservable(this.selectedChart.uploadType);
    if (data$) {
      data$.subscribe({
        next: (data) => this.latestData = data,
        error: () => this.latestData = []
      });
    }
  }

  private getDataObservable(type: string): Observable<any[]> | null {
    switch (type) {
      case 'childMorbidity': return this.childMorbidityData.getAll();
      case 'vaccineImpact': return this.vaccineImpactData.getAll();
      case 'deathsDaily': return this.deathData.getAll();
      case 'deathsVaccinationStatus': return this.deathData.getByVaccinationStatus();
      case 'testingPositivity': return this.testingData.getAll();
      case 'testingAgeGroups': return this.testingData.getByAgeGroups();
      case 'testingVolume': return this.testingData.getVolume();
      case 'additionalInvestigationsDaily': return this.investigationsData.getAll();
      case 'additionalInvestigationsWeekly': return this.investigationsData.getWeekly();
      case 'recoveryDaily': return this.recoveryData.getAll();
      case 'recoveryVaccination': return this.recoveryData.getByVaccination();
      case 'recoveryVaccinationAgeGroups': return this.recoveryData.getByVaccinationAgeGroups();
      case 'vaccinationDaily': return this.populationData.getDaily();
      case 'vaccinationCumulative': return this.populationData.getCumulative();
      case 'vaccinationAgeGroups': return this.populationData.getByAgeGroups();
      case 'mainMetricsDaily': return this.mainMetricsData.getDaily();
      case 'mainMetricsWeekly': return this.mainMetricsData.getWeekly();
      default: return null;
    }
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (!file || !this.selectedChart.uploadType) return;
    this.statusMessage = 'מעלה...';
    const upload$ = this.getUploadObservable(this.selectedChart.uploadType, file);
    if (!upload$) return;
    upload$.subscribe({
      next: () => {
        this.statusMessage = '✅ הועלו בהצלחה';
        this.loadUploadLog();
        this.loadTableData();
      },
      error: (err: any) => this.statusMessage = `❌ שגיאה: ${err.message}`
    });
  }

  private getUploadObservable(uploadType: string, file: File) {
    switch (uploadType) {
      case 'childMorbidity': return this.childMorbidityUpload.upload(file);
      case 'vaccineImpact': return this.vaccineImpactUpload.upload(file);
      case 'deathsDaily': return this.deathUpload.uploadDaily(file);
      case 'deathsVaccinationStatus': return this.deathUpload.uploadVaccinationStatus(file);
      case 'testingPositivity': return this.testingUpload.uploadPositivity(file);
      case 'testingAgeGroups': return this.testingUpload.uploadAgeGroups(file);
      case 'testingVolume': return this.testingUpload.uploadVolume(file);
      case 'additionalInvestigationsDaily': return this.additionalInvestigationsUpload.uploadDaily(file);
      case 'additionalInvestigationsWeekly': return this.additionalInvestigationsUpload.uploadWeekly(file);
      case 'recoveryDaily': return this.recoveryCasesUpload.uploadDaily(file);
      case 'recoveryVaccination': return this.recoveryCasesUpload.uploadVaccination(file);
      case 'recoveryVaccinationAgeGroups': return this.recoveryCasesUpload.uploadVaccinationAgeGroups(file);
      case 'vaccinationDaily': return this.populationVaccinationUpload.uploadDaily(file);
      case 'vaccinationCumulative': return this.populationVaccinationUpload.uploadCumulative(file);
      case 'vaccinationAgeGroups': return this.populationVaccinationUpload.uploadAgeGroups(file);
      case 'mainMetricsDaily': return this.mainMetricsUpload.uploadDaily(file);
      case 'mainMetricsWeekly': return this.mainMetricsUpload.uploadWeekly(file);
      default: return null;
    }
  }

  isSeriesVisible(key: string): boolean {
    return this.settings?.visibleSeries?.includes(key);
  }

  toggleSeries(key: string) {
    if (!this.settings.visibleSeries) this.settings.visibleSeries = [];
    const index = this.settings.visibleSeries.indexOf(key);
    index > -1 ? this.settings.visibleSeries.splice(index, 1) : this.settings.visibleSeries.push(key);
  }

  loadSettings() {
    this.loading = true;
    this.service.getSettings(this.selectedChart.name).subscribe(s => {
      this.settings = s ? {
        ...s,
        visibleSeries: typeof s.visibleSeries === 'string' ? JSON.parse(s.visibleSeries) : (s.visibleSeries || []),
        visibleDates: typeof s.visibleDates === 'string' ? JSON.parse(s.visibleDates) : (s.visibleDates || [])
      } : this.emptySettings();
      this.loading = false;
    });
  }

  loadUploadLog() {
    this.uploadLogService.getAll().subscribe(logs => {
      const log = logs.find((l: any) => l.uploadType?.toLowerCase() === this.selectedChart.uploadType?.toLowerCase());
      this.uploadLog = log ? { id: log.id, fileName: log.fileName, uploadedAt: log.uploadedAt } : null;
    });
  }

  deleteUploadLog() {
    if (!this.uploadLog || !confirm('למחוק היסטוריה?')) return;
    this.uploadLogService.delete(this.uploadLog.id).subscribe(() => {
      this.uploadLog = null;
      this.loadTableData();
    });
  }

  save() {
    this.service.saveSettings(this.settings).subscribe(() => {
      this.saved = true;
      setTimeout(() => this.saved = false, 3000);
    });
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/admin']);
  }

  private emptySettings(): ChartSettingsInterface {
    return {
      chartName: this.selectedChart.name,
      title: '',
      visibleSeries: this.selectedChart.series.map(s => s.key),
      visibleDates: [],
      dateRangeStart: null,
      dateRangeEnd: null
    };
  }
}

