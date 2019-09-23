import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-description',
  templateUrl: './post-description.component.html',
  styleUrls: ['./post-description.component.scss']
})
export class PostDescriptionComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  getPostDescription(data){
    this.postService.getPostById(data).subscribe(
      (res) => { console.log(res)}  
    );
  }

}
