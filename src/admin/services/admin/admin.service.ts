import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = `${environment.apiUrl}/Admin`;

  constructor(private http: HttpClient) { }

  getProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/profile`);
  }

  getAllCases(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/cases`);
  }

  addCase(caseData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/cases`, caseData);
  }

  updateCase(id: any, caseData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/cases/${id}`, caseData);
  }

  deleteCase(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/cases/${id}`);
  }
}