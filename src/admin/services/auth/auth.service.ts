import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/Auth`

  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/login?username=${username}&password=${password}`;

    return this.http.post(url, {}).pipe( 
      tap((res: any) => {
        if (res && res.token) {
          localStorage.setItem('token', res.token);
        }
      })
    );
  }
  logout(): void {
    localStorage.removeItem('token')
  }

  getToken(): string | null {
    return localStorage.getItem('token')
  }

  isLoggedIn(): boolean {
    const token = this.getToken();

    console.log('DEBUG: Token raw value:', token);
    console.log('DEBUG: Token type:', typeof token);

    if (!token || token === null || token === 'null' || token === 'undefined' || token.trim() === '') {
      return false;
    }

    if (!token.includes('.')) {
      return false;
    }

    return true;
  }
}
