import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLoginComponent } from './components/admin-login/admin-login.component'
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component'
// import { AdminUploadComponent } from './components/admin-upload/admin-upload.component'
import { AuthGuard } from './guards/auth.guard';
import { ChartSettingsComponent } from './components/chart-settings/chart-settings.component';

// const routes: Routes = [
//   { path: '', component: AdminLoginComponent },
//   { path: 'dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] },
//   // { path: 'upload', component: AdminUploadComponent, canActivate: [AuthGuard] },
//   { path: 'chart-settings', component: ChartSettingsComponent, canActivate: [AuthGuard] }
// ];
const routes: Routes = [
  // נתיב ריק מפנה ללוגין
  { path: '', component: AdminLoginComponent },
  
  // דאשבורד מוגן
  { 
    path: 'dashboard', 
    component: AdminDashboardComponent, 
    canActivate: [AuthGuard] 
  },
  
  // הגדרות מוגנות
  { 
    path: 'chart-settings', 
    component: ChartSettingsComponent, 
    canActivate: [AuthGuard] 
  },
  
  // ניתוב מחדש לכל נתיב לא מוכר
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
