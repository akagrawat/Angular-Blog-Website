import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUrl:string = 'https://accedo-video-app-api.herokuapp.com/login/';
  userDetails:any;
  user:any;
  userStatus = false;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient, 
              private router: Router, 
              private sharedService: SharedService) {}


  
  login(data: any): Observable<any>{
    return this.http.post<any>(this.loginUrl,data);

  }

  logout(){
    localStorage.setItem('users','');
    let user = localStorage.getItem('users');
    this.sharedService.updatedLoginData(user);
    this.router.navigate(['/home']);
  }

  isLoggedIn(){ 
    this.user = localStorage.getItem('users');
    if(this.user != ''){
      return true;
    }
    else{ 
      return false;
    }
  }

}
  
 

