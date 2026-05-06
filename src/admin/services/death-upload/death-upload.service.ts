import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeathUploadService {
  private apiUrl = `${environment.apiUrl}/DeathUpload`;

  constructor(private http: HttpClient) {}

  uploadDaily(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/daily`, formData, { responseType: 'text' });
  }

  uploadVaccinationStatus(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/vaccination-status`, formData, { responseType: 'text' });
  }

  getDaily(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/daily`);
}
}
