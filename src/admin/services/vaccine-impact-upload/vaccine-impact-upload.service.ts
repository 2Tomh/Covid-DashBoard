import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VaccineImpactUploadService {
  private apiUrl = `${environment.apiUrl}/VaccineImpactUpload`;

  constructor(private http: HttpClient) {}

  upload(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(this.apiUrl, formData, { responseType: 'text' });
  }
  getDaily(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/daily-data`); 
    // וודא שה-Endpoint ב-API שלך תואם לזה (למשל daily-data או פשוט daily)
  }
}
