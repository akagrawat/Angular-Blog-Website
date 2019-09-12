import { Component, OnInit,  } from '@angular/core';
import { AuthService} from '../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user:any;

  constructor(private authService: AuthService) {

   }

  ngOnInit() {
    
    this.user = localStorage.getItem('users');
  }
  
  logout(){
    this.authService.logout();
    this.user = localStorage.getItem('users');
  }

}
