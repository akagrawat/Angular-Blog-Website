import { Injectable } from '@angular/core';
import { User } from '../shared/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUrl:string = 'https://accedo-video-app-api.herokuapp.com/login'
  userDetails:any;
  user:any;
  userStatus = false;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient, private router: Router) {
  }


  // getUsers(): Observable<any>{
  //   return this.http.post<any>(this.loginUrl, {
  //     "username": "user@gmail.com",
  //     "password": "1234567"
  //   });
  // } 

  login(data: any){
    console.log(data);
    return this.http.post<any>(this.loginUrl,  data);

  }

  logout(){

    localStorage.setItem('users','');
    this.router.navigate(['/home']);
  }

  isLoggedIn(){
    this.user = localStorage.getItem('users');
    if(this.user !== ''){
      return true;
    }
    else{ 
      return false;
    }
  }
}
  
 

