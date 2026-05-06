import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ChildMorbidityUploadService {
  private apiUrl = `${environment.apiUrl}/ChildMorbidityUpload`;

  constructor(private http: HttpClient) { }
  upload(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(this.apiUrl, formData, { responseType: 'text' });
  }

  getAll(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl); // מניח שה-GET מחזיר את כל הנתונים
}
}
