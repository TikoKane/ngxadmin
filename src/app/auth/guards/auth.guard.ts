import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Router} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../auth.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private myRoute: Router, private jwtHelper : JwtHelperService) {}
  canActivate(
  
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {  
      const token = localStorage.getItem("jwt");
    if (this.auth.isLoggedInn() && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }else {
      this.myRoute.navigate(['auth/login']);
      return false;
    }
  }
}
