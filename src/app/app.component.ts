import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showHead: boolean = false;

  constructor(private router: Router) {
    // on route change to '/login', set the variable showHead to false
      router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
          if (event['url'] == '/admin') {
            this.showHead = false;
          } else if(event['url'] == '/admin/dashboard'){
            this.showHead = false;
          }else if(event['url'] == '/admin/users'){
            this.showHead = false;
          }
            else {
            // console.log("NU")
            this.showHead = true;
          }
        }
      });
    }

    ngOnInit(){
     
    }
}
