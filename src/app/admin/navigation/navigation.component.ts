import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

userDetail: any;
managerData:any;

  constructor(private authService: AuthService) {

   }

  ngOnInit() {
    this.userDetail = JSON.parse(localStorage.getItem('users'));
    if(this.userDetail.success){
      (this.userDetail.success.role == "manager" ? this.managerData = this.userDetail.success.role : this.managerData = '' );
    }

    
  }

  logout(){
    this.authService.logout();
  }

}
