import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChildMorbidityService {
  private apiUrl = `${environment.apiUrl}/ChildMorbidity`
  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
  }
  getByAgeGroup(ageGroup: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/agegroup/${ageGroup}`);
  }
  getFiltered(timeRange: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/filtered`, {
      params: { timeRange: timeRange }
    });
  }
}
