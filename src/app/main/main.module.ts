import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- 1. הוסף את השורה הזו
import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OverviewCardsComponent } from './components/overview-cards/overview-cards.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { ChildMorbidityComponent } from './components/pages/child-morbidity/child-morbidity.component';
import { VaccineImpactComponent } from './components/pages/vaccine-impact/vaccine-impact.component';
import { DeathsComponent } from './components/pages/deaths/deaths.component';
import { TestingComponent } from './components/pages/testing/testing.component';
import { AdditionalInvestigationsComponent } from './components/pages/additional-investigations/additional-investigations.component';
import { RecoveryCasesComponent } from './components/pages/recovery-cases/recovery-cases.component';
import { PopluationVaccinationComponent } from './components/pages/popluation-vaccination/popluation-vaccination.component'
import { ChartsModule } from 'ng2-charts';
import { MainMetricsComponent } from './components/pages/main-metrics/main-metrics.component'
import { HttpClientModule } from '@angular/common/http';
import { DeathsDailyComponent } from './components/pages/deaths/deaths-daily/deaths-daily.component';
import { DeathsVaccinationComponent } from './components/pages/deaths/deaths-vaccination/deaths-vaccination.component';
import { TetsingPositivityComponent } from './components/pages/testing/tetsing-positivity/tetsing-positivity.component';
import { TetsingVolumeComponent } from './components/pages/testing/tetsing-volume/tetsing-volume.component';
import { TetsingAgeGroupsComponent } from './components/pages/testing/tetsing-age-groups/tetsing-age-groups.component';
import { AdditionalInvestigationsDailyComponent } from './components/pages/additional-investigations/additional-investigations-daily/additional-investigations-daily.component';
// import { AdditionalInvestigationsWeeklyComponent } from './components/pages/additional-investigations/additional-investigations-weekly/additional-investigations-weekly.component';
import { RecoveryDailyComponent } from './components/pages/recovery-cases/recovery-daily/recovery-daily.component';
import { RecoveryByVaccinationComponent } from './components/pages/recovery-cases/recovery-by-vaccination/recovery-by-vaccination.component';
import { RecoveryByVaccinationAgeGroupsComponent } from './components/pages/recovery-cases/recovery-by-vaccination-age-groups/recovery-by-vaccination-age-groups.component';
import { VaccinationDailyComponent } from './components/pages/popluation-vaccination/vaccination-daily/vaccination-daily.component';
import { VaccinationCumulativeComponent } from './components/pages/popluation-vaccination/vaccination-cumulative/vaccination-cumulative.component';
import { VaccinationAgeGroupsComponent } from './components/pages/popluation-vaccination/vaccination-age-groups/vaccination-age-groups.component';
import { MainMetricsDailyComponent } from './components/pages/main-metrics/main-metrics-daily/main-metrics-daily.component';
import { MainMetricsWeeklyComponent } from './components/pages/main-metrics/main-metrics-weekly/main-metrics-weekly.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartFilterComponent } from './components/pages/chart-filter/chart-filter.component';
import { HeaderActionsComponent } from './components/header/header-actions/header-actions.component';
import { HeaderNavComponent } from './components/header/header-nav/header-nav.component';
import { HeaderBrandingComponent } from './components/header/header-branding/header-branding.component';
import { HeaderComponentComponent } from './components/overview-cards/header-component/header-component.component';
import { SubHeaderComponent } from './components/overview-cards/sub-header/sub-header.component';
import { DetailCardComponent } from './components/overview-cards/detail-card/detail-card.component';
import { CityTrafficLightTableComponent } from './components/table-data/city-traffic-light-table/city-traffic-light-table.component'
import { HospitalOccupancyTableComponent } from './components/table-data/hospital-occupancy-table/hospital-occupancy-table.component'
import { InternationalMetricsTableComponent } from './components/table-data/international-metrics-table/international-metrics-table.component'

import { MatTableModule } from '@angular/material/table';
import { TableDataComponent } from './components/table-data/table-data.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    MainDashboardComponent,
    MainMetricsComponent,
    HeaderComponent,
    FooterComponent,
    OverviewCardsComponent,
    ChildMorbidityComponent,
    VaccineImpactComponent,
    DeathsComponent,
    TestingComponent,
    AdditionalInvestigationsComponent,
    RecoveryCasesComponent,
    PopluationVaccinationComponent,
    DeathsDailyComponent,
    DeathsVaccinationComponent,
    TetsingPositivityComponent,
    TetsingVolumeComponent,
    TetsingAgeGroupsComponent,
    AdditionalInvestigationsDailyComponent,
    // AdditionalInvestigationsWeeklyComponent,
    RecoveryDailyComponent,
    RecoveryByVaccinationComponent,
    RecoveryByVaccinationAgeGroupsComponent,
    VaccinationDailyComponent,
    VaccinationCumulativeComponent,
    VaccinationAgeGroupsComponent,
    MainMetricsDailyComponent,
    MainMetricsWeeklyComponent,
    ChartFilterComponent,
    HeaderActionsComponent,
    HeaderNavComponent,
    HeaderBrandingComponent,
    HeaderComponentComponent,
    SubHeaderComponent,
    DetailCardComponent,
    HospitalOccupancyTableComponent,
    InternationalMetricsTableComponent,
    CityTrafficLightTableComponent,
    TableDataComponent,
  ],
  imports: [
    MatTableModule,
    MatSelectModule,    // <-- חובה עבור הפילטר החדש
    MatFormFieldModule,
    CommonModule,
    FormsModule,
    ChartsModule,
    MainRoutingModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ], exports: [
    MainDashboardComponent,
    HeaderComponent,
    FooterComponent,
    MainMetricsComponent,
    TableDataComponent,
    ChildMorbidityComponent,
    OverviewCardsComponent,
    VaccineImpactComponent,
    DeathsComponent,
    TestingComponent,
    AdditionalInvestigationsComponent,
    RecoveryCasesComponent,
    PopluationVaccinationComponent
  ]
})
export class MainModule { }
