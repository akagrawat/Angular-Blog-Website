import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData = { username: '', password: '' };
  returnUrl: string;
  invalidUser = '';
  user: any;

  constructor(private authService: AuthService, private router: Router,
    private route: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit() {
    // get current url to go back after login
    this.route.queryParams
      .subscribe(params => this.returnUrl = params['returnUrl'] || '/');

    this.sharedService.data.subscribe(result => {
      this.user = result
    });

    // Navigate user if already login
    if (this.user) {
      this.router.navigate(['profile']);
    }
  }

  onSubmit() {
    this.authService.login(this.loginData).subscribe(
      data => {
        if (data.success) {
          console.log('Login successfully');
          this.sharedService.updatedLoginData(data);
          console.log(data);
          localStorage.setItem('users', JSON.stringify(data));
          let user = JSON.parse(localStorage.getItem('users'));

          // redirect according to roles
          if (user.success.role == 'admin') {
            this.router.navigate(['admin'])
          } else if (user.success.role == 'manager') {
            this.router.navigate(['admin'])
          }
          else {
            this.router.navigate(['profile']);
          }
        }

        // error msg for invalide username & password 
        if (!data.success) {
          this.invalidUser = data;
          console.log('Login unsccessfull');
          console.log(data);
        }
      },
      err => {
        console.log('error occurs', err);
      }
    );

  }


}
