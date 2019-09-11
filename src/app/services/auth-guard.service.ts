import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, Route, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable()
export class AuthGuardService {

  constructor(private router: Router) { }
  
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    if(true){
      return true;
    }else{

    this.router.navigate['/login'];
    return false;
    }
    
  }
}


