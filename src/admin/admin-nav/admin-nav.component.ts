import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service'; // תוודא שהנתיב נכון

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent {
  @Input() adminProfile: any = null;
  @Output() onOpenProfileModal = new EventEmitter<void>();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  // זה מה שמפעיל את הכפתור האדום
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/admin']);
  }

  // זה מה שמפעיל את כפתור העריכה
  triggerProfileEdit(): void {
    this.onOpenProfileModal.emit();
  }
}