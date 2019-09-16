import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  blogs:any;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.blogs = this.postService.getPosts();
  }

}
