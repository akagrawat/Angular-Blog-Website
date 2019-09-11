import { Component, OnInit } from '@angular/core';
import { users } from '../services/login-mock';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData = { email: '', password: ''}
  returnUrl: string;  

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams
    .subscribe(params => this.returnUrl = params['returnUrl'] || '/');
  }
  onSubmit()
  {
    console.log(this.loginData);
    this.authService.login(this.loginData);
    console.log(this.returnUrl);
    this.router.navigateByUrl(this.returnUrl);
  }

}
