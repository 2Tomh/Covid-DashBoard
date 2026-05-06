import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestingService {
  private apiUrl = `${environment.apiUrl}/Testing`;

  constructor(private http: HttpClient) { }

  getAll():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl)
  }

  getByAgeGroups(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/age-groups`)
  }

  getVolume():Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/volume`)
  }
}
