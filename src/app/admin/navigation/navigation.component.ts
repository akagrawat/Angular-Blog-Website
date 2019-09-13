import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private authService: AuthService) {

   }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
  }

}
