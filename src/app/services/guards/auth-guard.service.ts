import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, Route, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';
@Injectable()
export class AuthGuard {
currentUrl: any;
  constructor(private router: Router, private authService: AuthService) {

    this.currentUrl = this.router.url;
   }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    if(this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login'], {queryParams:{returnUrl: state.url},  skipLocationChange: true});
    //skipLocationChange hide the url queryParams 
    return false;
  }
}


