import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TestingUploadService {

  private apiUrl = `${environment.apiUrl}/TestingUpload`;

  constructor(private http: HttpClient) { }

  uploadPositivity(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/positivity`, formData);
  }

  uploadAgeGroups(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/age-groups`, formData);
  }

  uploadVolume(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/volume`, formData);
  }
}