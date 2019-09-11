import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import{ CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router, Route} from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RoleGuard {
   user = 'adminx';

  constructor(private authService: AuthService, private router: Router) { }
canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{
  
  if(this.user == route.data.role){
    return true;
  }
  this.router.navigate(['profile']);
  return false;
}

}
