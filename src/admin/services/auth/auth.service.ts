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

    return this.http.post(url, {}).pipe( // שולחים Body ריק {}
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

  // isLoggedIn(): boolean {
  //   const token = this.getToken();
  //   console.log('Current token value:', token); // האם זה באמת null או טקסט שכתוב בו "null"?
  //   return !!token && token !== 'undefined' && token !== 'null';
  // }
  isLoggedIn(): boolean {
    const token = this.getToken();

    // הדפסה לבדיקה - תראה מה יוצא לך כאן בקונסול
    console.log('DEBUG: Token raw value:', token);
    console.log('DEBUG: Token type:', typeof token);

    // בדיקה רב-שלבית:
    // 1. האם הטוקן בכלל קיים (לא null ולא undefined)
    // 2. האם הוא לא מחרוזת ריקה
    // 3. האם הוא לא המילה "null" או "undefined" כטקסט (קורה לפעמים ב-JS)
    if (!token || token === null || token === 'null' || token === 'undefined' || token.trim() === '') {
      return false;
    }

    // אופציונלי: טוקן JWT תמיד מכיל נקודות (.). אם אין נקודה, זה לא טוקן.
    if (!token.includes('.')) {
      return false;
    }

    return true;
  }
}
