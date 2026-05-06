import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component'
import { TestingComponent } from './components/pages/testing/testing.component';
import { MainMetricsComponent } from './components/pages/main-metrics/main-metrics.component';
import { ChildMorbidityComponent } from './components/pages/child-morbidity/child-morbidity.component';

const routes: Routes = [
  {
    path: '', component: MainDashboardComponent,
    children: [
      { path: 'testing', component: TestingComponent },
      { path: 'main-metrics', component: MainMetricsComponent },
      { path: 'child-morbidity', component: ChildMorbidityComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
