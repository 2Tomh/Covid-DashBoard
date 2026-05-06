import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../../src/admin/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  // canActivate():boolean{
  //   if(this.authService.isLoggedIn()){
  //     return true
  //   }
  //   this.router.navigate(['/admin'])
  //   return false
  // }
  canActivate(): boolean {
    console.log('AuthGuard is checking access...'); // בדוק אם זה מודפס בקונסול
    if (this.authService.isLoggedIn()) {
      console.log('Access granted');
      return true;
    }
    console.log('Access denied! Redirecting...');
    this.router.navigate(['/admin']);
    return false;
  }
}
