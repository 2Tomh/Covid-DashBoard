import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDashboardComponent } from './main/main-dashboard/main-dashboard.component';
import { MainMetricsComponent } from './main/components/pages/main-metrics/main-metrics.component'
import { TestingComponent } from './main/components/pages/testing/testing.component'

const routes: Routes = [
  {
    path: 'main',
    component: MainDashboardComponent,
    children: [
      { path: 'main-metrics', component: MainMetricsComponent },
      { path: 'testing', component: TestingComponent },
      { path: '', redirectTo: 'main-metrics', pathMatch: 'full' }
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
  },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', redirectTo: 'main' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
