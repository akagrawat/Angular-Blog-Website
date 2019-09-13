import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { SharedService } from '../shared.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RoleGuard {
  user: any;
  constructor(private authService: AuthService, 
              private router: Router, 
              private sharedService: SharedService) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    this.user = localStorage.getItem('users');

    if (this.user != '') {
      this.user = JSON.parse(localStorage.getItem('users'));
      if (this.user.success.role == route.data.role) {
        return true;
      }
      else {
        this.router.navigate(['profile']);
        return false;
      }
    }

    else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
