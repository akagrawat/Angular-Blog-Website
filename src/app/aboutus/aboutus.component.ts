import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  teamMembers = [
    {"name":"Anna Williams","role": "GRAPHIC DESIGNER", "description": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci sed quia non numquam modi tempora eius ","url":"https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"},
    {"name":"John Doe","role": "WEB DEVELOPER", "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem ipsa accusantium doloremque rem laudantium totam aperiam.","url":"https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"},
    {"name":"Maria Smith","role": "PHOTOGRAPHER", "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim est fugiat nulla id eu laborum.","url":"https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"},
    {"name":"Tom Adams","role": "BACKEND DEVELOPER", "description": "Perspiciatis repellendus ad odit consequuntur, eveniet earum nisi qui consectetur totam officia voluptates perferendis voluptatibus aut.","url":"https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"},
  ]

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<any[]>){
    moveItemInArray(this.teamMembers,event.previousIndex,event.currentIndex);
  }

}
