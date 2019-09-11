import { Component, OnInit } from '@angular/core';
import { users } from './login-mock';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData = { email: '', password: ''}

  constructor() { }

  ngOnInit() {
  }
  onSubmit()
  {
    console.log(this.loginData);
    for(let value of users)
    {
    
      if(value.email == this.loginData.email && value.password == this.loginData.password){
        console.log('login successfully');
      }
      
    }
  }

}
