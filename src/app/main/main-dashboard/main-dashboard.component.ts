import { Component, OnInit, HostListener } from '@angular/core';
import { LanguageTransformService } from '../services/language-transform.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {
  public isCollapsed = false;
  isEnglish = false;
  isMobile = false;

  constructor(private langService: LanguageTransformService) {}

  ngOnInit(): void {
    this.langService.isEnglish$.subscribe(val => {
      this.isEnglish = val;
    });
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 768;
  }

  get mainMarginRight(): number {
    if (this.isMobile) return 0;
    return !this.isEnglish ? (this.sideNavRef?.isCollapsed ? 60 : 300) : 0;
  }

  get mainMarginLeft(): number {
    if (this.isMobile) return 0;
    return this.isEnglish ? (this.sideNavRef?.isCollapsed ? 60 : 300) : 0;
  }

  sideNavRef: any;

  toggleSidenav() {
    this.isCollapsed = !this.isCollapsed;
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }
}