// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { ChartsModule } from 'ng2-charts';
// import { MainModule } from './main/main.module';
// import { HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AuthComponent } from './core/interceptors/auth/auth.component';
// @NgModule({
//   declarations: [
//     AppComponent,
//     AuthComponent,
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     ChartsModule,
//     MainModule,
//     HttpClientModule,
//     BrowserAnimationsModule

//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { MainModule } from './main/main.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // הוספנו HTTP_INTERCEPTORS
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ה-Import יוצא מתיקיית app לתיקיית admin שנמצאת באותה רמת src
import { AuthInterceptor } from '../admin/core/auth/auth.interceptor'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    MainModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }