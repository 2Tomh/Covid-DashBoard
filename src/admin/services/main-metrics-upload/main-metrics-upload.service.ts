import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainMetricsUploadService {
  private apiUrl = `${environment.apiUrl}/MainMetricsUpload`;

  constructor(private http: HttpClient) { }

  uploadDaily(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/daily`, formData, { responseType: 'text' });
  }

  uploadWeekly(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/weekly`, formData, { responseType: 'text' });
  }

  getDaily(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/daily-data`);
  }
}