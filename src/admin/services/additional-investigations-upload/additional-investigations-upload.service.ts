import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdditionalInvestigationsUploadService {
  private apiUrl = `${environment.apiUrl}/AdditionalInvestigationsUpload`;

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
}