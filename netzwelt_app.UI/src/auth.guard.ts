import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) {}

  canActivate(): boolean {
    // Check if the user is logged in or has a valid authentication token
    const isLoggedIn = this.cookieService.get('authenticated');
    if (isLoggedIn != null && isLoggedIn == 'true') {
      return true; // Allow access to the home page
    } else {
      this.router.navigate(['/login']); // Redirect to the login page
      return false;
    }
  }
}
