import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    return myAuthGuard(next, state);
  }
}

export function myAuthGuard(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
  // Your custom logic goes here
  // For example, you can check if the user is authenticated and return true or false accordingly
  // If not authenticated, you can redirect to the login page or any other route using the Router

  return true; // Replace this with your custom logic
}
