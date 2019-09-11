import { Injectable } from '@angular/core';
import { users } from './login-mock';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 userStatus:boolean;
user:any;
  constructor() {}

  login(data: any){
   
    for(let  mockData of users)
    {
    if( mockData.email == data.email && mockData.password == data.password){
      console.log('login successfully');
      this.userStatus = true;
    }else{
    console.log('Login unsccessful');
    this.userStatus = false;
    }
  }

  }
  isLoggedIn(){
    if(this.userStatus){
      return true;
    }
    else{
      return false;
    }
  }
}
