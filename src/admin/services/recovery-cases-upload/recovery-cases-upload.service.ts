import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecoveryCasesUploadService {


  private apiUrl = `${environment.apiUrl}/RecoveryCasesUpload`;

  constructor(private http: HttpClient) { }

  uploadDaily(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/daily`, formData, { responseType: 'text' });
  }

  uploadVaccination(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/vaccination`, formData, { responseType: 'text' });
  }

  uploadVaccinationAgeGroups(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/vaccination-age-groups`, formData, { responseType: 'text' });
  }
}