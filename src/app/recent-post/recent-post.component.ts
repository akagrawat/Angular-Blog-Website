import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-recent-post',
  templateUrl: './recent-post.component.html',
  styleUrls: ['./recent-post.component.scss']
})
export class RecentPostComponent implements OnInit {
blogs:any;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.blogs = this.postService.getPosts();
  }

}
