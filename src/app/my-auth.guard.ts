import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyAuthGuard implements CanActivate{
  constructor(private router: Router) {}

  canActivate(){
    const isAuthenticated = false;
    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/homePage']);
      return false;
    }
  }

}
