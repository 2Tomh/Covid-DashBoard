import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PopulationVaccinationService {

  private apiUrl = `${environment.apiUrl}/PopulationVaccination`;

  constructor(private http: HttpClient) { }

  getDaily(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/daily`);
  }

  getCumulative(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/cumulative`);
  }

  getByAgeGroups(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/age-groups`);
  }
}
