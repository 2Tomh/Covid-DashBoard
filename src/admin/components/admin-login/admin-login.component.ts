import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../src/admin/services/auth/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  username = '';
  password = '';
  showPassword = false;
  isLoading = false;
  submitted = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // אם המשתמש כבר מחובר, שלח אותו ישר לדשבורד
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/admin/dashboard']);
    }
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    this.submitted = true;
    this.errorMessage = '';

    if (!this.username || !this.password) {
      return;
    }

    this.isLoading = true;

    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        this.router.navigate(['/admin/dashboard']);
      },
      error: (err) => {
        this.isLoading = false;
        // טיפול בשגיאות לפי סטטוס מהשרת
        if (err.status === 401) {
          this.errorMessage = 'שם משתמש או סיסמה שגויים';
        } else if (err.status === 403) {
          this.errorMessage = 'אין לך הרשאות ניהול';
        } else {
          this.errorMessage = 'שגיאה בחיבור לשרת, נסה שוב מאוחר יותר';
        }
      }
    });
  }
}