// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { AdminRoutingModule } from './admin-routing.module';
// import { AdminLoginComponent } from './components/admin-login/admin-login.component';
// import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
// import { ProfileModalComponent } from './components/profile-modal/profile-modal.component';
// import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
// import { ChartSettingsComponent } from './components/chart-settings/chart-settings.component';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatSelectModule } from '@angular/material/select';
// import { MatInputModule } from '@angular/material/input';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatButtonModule } from '@angular/material/button';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { AdminNavComponent } from './admin-nav/admin-nav.component';
// import { CaseEditorComponent } from './components/case-editor/case-editor.component';
// import { AuthInterceptor } from '../admin/core/auth/auth.component'; // וודא נתיב

// @NgModule({
//   declarations: [
//     AdminLoginComponent,
//     AdminDashboardComponent,
//     ProfileModalComponent,
//     ChartSettingsComponent,
//     AdminNavComponent,
//     CaseEditorComponent
//   ],
//   imports: [
//     CommonModule,
//     AdminRoutingModule,
//     HttpClientModule,
//     FormsModule,
//     MatFormFieldModule,
//     MatSelectModule,
//     MatInputModule,
//     MatCheckboxModule,
//     MatButtonModule,
//     MatProgressSpinnerModule
//   ]
// })
// export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // הוספתי ReactiveFormsModule אם תצטרך
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Routing
import { AdminRoutingModule } from './admin-routing.module';

// Components
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProfileModalComponent } from './components/profile-modal/profile-modal.component';
import { ChartSettingsComponent } from './components/chart-settings/chart-settings.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { CaseEditorComponent } from './components/case-editor/case-editor.component';

// Material Modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Interceptor - וודא שהקובץ אכן נקרא auth.interceptor ולא auth.component
import { AuthInterceptor } from '../admin/core/auth/auth.interceptor'; 

@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminDashboardComponent,
    ProfileModalComponent,
    ChartSettingsComponent,
    AdminNavComponent,
    CaseEditorComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // Material
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [
    // זה החלק הכי חשוב שפתר לנו את ה-401!
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AdminModule { }