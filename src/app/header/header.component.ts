import { Component, OnInit,  } from '@angular/core';
import { AuthService} from '../services/auth.service';
import { SharedService } from '../services/shared.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any;
  constructor(private authService: AuthService, 
              private sharedService: SharedService) {}

  ngOnInit() {
    // Access user value as observable
    this.sharedService.getLoginData().subscribe(
      (data) => this.user = data
    )
}

  logout(){
    this.authService.logout();    
  }

}
