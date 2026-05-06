import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecoveryCasesService {
  private apiUrl = `${environment.apiUrl}/RecoveryCases`;

  constructor(private http: HttpClient) { }

  getAll():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl)
  }

  getByVaccination():Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/vaccination`)
  }

  getByVaccinationAgeGroups(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/vaccination/age-group`)
  }

}
