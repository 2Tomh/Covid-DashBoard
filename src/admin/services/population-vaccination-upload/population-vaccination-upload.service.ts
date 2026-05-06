import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PopulationVaccinationUploadService {

    private apiUrl = `${environment.apiUrl}/PopulationVaccinationUpload`;

  constructor(private http: HttpClient) {}

  uploadDaily(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/daily`, formData, { responseType: 'text' });
  }

  uploadCumulative(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/cumulative`, formData, { responseType: 'text' });
  }

  uploadAgeGroups(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/age-groups`, formData, { responseType: 'text' });
  }
}