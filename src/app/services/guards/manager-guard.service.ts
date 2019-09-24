import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router,  } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerGuard {
userDetail:any;

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{
    this.userDetail = JSON.parse( localStorage.getItem('users'));
    if(this.userDetail.success.role == 'admin'){
      return true;
    }
    else{
      this.router.navigate(['admin']);
      return false;
    }
  }
}
