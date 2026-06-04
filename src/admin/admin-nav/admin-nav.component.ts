import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

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

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/admin']);
  }

  triggerProfileEdit(): void {
    this.onOpenProfileModal.emit();
  }
}