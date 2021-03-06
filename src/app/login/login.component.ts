import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { UsersService} from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData = { username: '', password: '',};
  signupData = { firstname: '', lastname:'', email:'', password:'', address:'',};
  returnUrl: String;
  invalidUser: any = '';  
  user: any;
  userList:any;
  loginSignupStatus: boolean;

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute, 
              private sharedService: SharedService,
              private usersServices: UsersService) { }

  ngOnInit() {
    // get current url to go back after login
    this.route.queryParams
      .subscribe(params => this.returnUrl = params['returnUrl'] || '/');

      this.usersServices.getUsers().subscribe(
        (data) => this.userList = data);
      
    this.sharedService.getLoginData().subscribe(result => {
      this.user = result;
    });

    // Navigate user if already login
    if (this.user) {
      this.router.navigate(['profile']);
    }

    this.loginSignupStatus = true;
  }

  onSubmit() {
    let userInfo;
    this.authService.login(this.loginData).subscribe(
      (data) => {

        if (data.success) {
          console.log('Login successfully');
          this.sharedService.updatedLoginData(data);
          localStorage.setItem('users', JSON.stringify(data));
          let user = JSON.parse(localStorage.getItem('users'));

          // redirect according to roles
          if (user.success.role == 'admin' || user.success.role == 'manager') {
            this.router.navigate(['admin']);
          } 
          else {
            this.router.navigate(['profile']);
          }
        }

        if(data.error){
          // check user in user list
          userInfo =this.userList.filter(
            (data)=> (this.loginData.username == data.email &&
            this.loginData.password == data.password ));

  
         if(userInfo.length != 0){
          console.log('Login successfully');
          this.sharedService.updatedLoginData(userInfo);
          localStorage.setItem('users', JSON.stringify(userInfo));
          this.router.navigate(['profile']);
            }

        }
 
        // error msg for invalid username & password 
        if (!data.success && userInfo) {
          this.invalidUser = data;
          console.log('Login unsccessfull');
          console.log(data);
        }
      },
      error => {
        console.log('error occurs' + error);
      }
    );

  }

  signUp(){
    let userDetail;
    userDetail =this.userList.filter(
      (data)=> (this.signupData.email == data.email &&
      this.signupData.password == data.password ));
      
    if(userDetail.length == 0){
      console.log('Login successfully');
      this.usersServices.createUser(this.signupData).subscribe((data) =>{
        console.log(data.success);
        let localData  = [];
        localData.push(data.success);
        this.sharedService.updatedLoginData(localData);
        localStorage.setItem('users', JSON.stringify(localData));
        this.router.navigate(['profile']);
      })
  } else {
    alert('User already exist with this email');
    
  }

}

signupStatus(){
  if(this.loginSignupStatus){
  this.loginSignupStatus = false;
  }else{
    this.loginSignupStatus = true;
  }

}
}
