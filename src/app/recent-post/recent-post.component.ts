import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-recent-post',
  templateUrl: './recent-post.component.html',
  styleUrls: ['./recent-post.component.scss']
})
export class RecentPostComponent implements OnInit {
blogs = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getFeaturedPost('Travel');
    this.getFeaturedPost('food');
  }

  getFeaturedPost(data)
{
  this.blogs.push(this.postService.getFeaturedPost(data));
  console.log(this.blogs);
}

}
