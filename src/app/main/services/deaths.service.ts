import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeathsService {
  private apiUrl = `${environment.apiUrl}/Deaths`
  constructor(private http: HttpClient) { }

  getAll():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl)
  }

  getByVaccinationStatus(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/vaccination-status`)
  }

  getByVaccinationStatusAndAgeGroup(ageGroup:string):Observable<any[]>{
    return this.http.get<any>(`${this.apiUrl}/vaccination-status/agegroup/${ageGroup}`)
  }
}
