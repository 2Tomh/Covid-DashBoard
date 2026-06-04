import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ChartFilter } from '../interfaces/chart-filter-interface';

@Injectable({
  providedIn: 'root'
})
export class MainMetricsService {
  private apiUrl = `${environment.apiUrl}/MainMetrics`;

  constructor(private http: HttpClient) { }

  getDaily(filter?: ChartFilter): Observable<any[]> {
    let params = new HttpParams();
    if (filter) {
      if (filter.timeRange) params = params.set('timeRange', filter.timeRange);
      if (filter.ageGroup) params = params.set('ageGroup', filter.ageGroup);
    }
    return this.http.get<any[]>(`${this.apiUrl}/daily`, { params });
  }

  getWeekly(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/weekly`);
  }
}