import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'; // חשוב להוסיף את זה
import { AuthService } from '../../services/auth/auth.service'; 
import { Router } from '@angular/router'; // חשוב להוסיף כדי לנווט

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    // כאן הוספנו את הטיפול בשגיאות שחוזרות מהשרת
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // אם חזרה שגיאה 401 (לא מורשה - כנראה טוקן פג תוקף)
        if (error.status === 401) {
          console.warn('הטוקן פג תוקף או שאינך מורשה, מעביר לעמוד התחברות...');
          
          this.authService.logout(); // קריאה לפונקציית התנתקות שמנקה את ה-LocalStorage
          this.router.navigateByUrl('/login'); // ניווט חזרה ללוגין
        }
        
        return throwError(error);
      })
    );
  }
}