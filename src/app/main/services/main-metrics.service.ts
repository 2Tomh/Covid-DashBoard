// import { Injectable } from '@angular/core';
// import {HttpClient} from '@angular/common/http'
// import { Observable } from 'rxjs';
// import { environment } from '../../../environments/environment';


// @Injectable({
//   providedIn: 'root'
// })
// export class MainMetricsService {
//   private apiUrl = `${environment.apiUrl}/MainMetrics`

//   constructor(private http: HttpClient) { }

//   getDaily():Observable<any[]>{
//     return this.http.get<any[]>(`${this.apiUrl}/daily`)
//   }

//   getWeekly(): Observable<any[]>{
//     return this.http.get<any[]>(`${this.apiUrl}/weekly`)
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'; // ייבוא של HttpParams
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ChartFilter } from '../interfaces/chart-filter-interface'; // וודא שהנתיב נכון

@Injectable({
  providedIn: 'root'
})
export class MainMetricsService {
  private apiUrl = `${environment.apiUrl}/MainMetrics`;

  constructor(private http: HttpClient) { }

  /**
   * שליחת בקשת GET לנתונים יומיים עם פילטרים
   */
  getDaily(filter?: ChartFilter): Observable<any[]> {
    let params = new HttpParams();
    if (filter) {
      if (filter.timeRange) params = params.set('timeRange', filter.timeRange);
      if (filter.ageGroup) params = params.set('ageGroup', filter.ageGroup);
    }
    // שליחת הבקשה ל-URL: /api/MainMetrics/daily?timeRange=...
    return this.http.get<any[]>(`${this.apiUrl}/daily`, { params });
  }

  getWeekly(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/weekly`);
  }
}