import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router,  } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RoleGuard {
  user: any;
  constructor( private router: Router, ) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    this.user = localStorage.getItem('users');
    this.user = JSON.parse(localStorage.getItem('users'));

if(this.user != '' && this.user.success){

  if(this.user.success.role == 'admin' || this.user.success.role == 'manager' ){
    return true;
  }
  else {
    this.router.navigate(['profile']);
    return false;
  }
}

else {
  this.router.navigate(['profile']);
        return false;
}

  }

}
