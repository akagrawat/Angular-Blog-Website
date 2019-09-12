  import { Component, OnInit } from '@angular/core';
  import { users } from '../services/login-mock';
  import { AuthService } from '../services/auth.service';
  import { Router, ActivatedRoute } from '@angular/router';
  import { User } from '../shared/user';

  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
  })
  export class LoginComponent implements OnInit {

    loginData = { username: '', password: '' };
    returnUrl: string;
    userInfo: User;

    constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
      this.route.queryParams
        .subscribe(params => this.returnUrl = params['returnUrl'] || '/');
        if(localStorage.getItem('users')){
          this.router.navigate(['profile']);
        }
    }

    onSubmit() {
      console.log(this.loginData);
      this.authService.login(this.loginData).subscribe(
        data => {
        localStorage.setItem('users',JSON.stringify( data));
        let user = JSON.parse(localStorage.getItem('users'));
        console.log(user.success.username);
        if(user.success.role == 'admin'){
          this.router.navigate(['admin'])
        } else if(user.success.role == 'manager'){
          this.router.navigate(['admin'])
        }
        else{
        this.router.navigate(['profile']);
        }
    },
        error =>{
          console.log('error occurs');
        }
      );
      
    }

  
  }
