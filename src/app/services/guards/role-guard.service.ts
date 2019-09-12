import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import{ ActivatedRouteSnapshot, RouterStateSnapshot,Router, Route} from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RoleGuard {
user:any;
  constructor(private authService: AuthService, private router: Router) { 
this.user = JSON.parse(localStorage.getItem('users'));
  } 
canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{
  
  if(this.user.success.role == route.data.role){
    return true;
  }
  this.router.navigate(['profile']);
  return false;
}

}
