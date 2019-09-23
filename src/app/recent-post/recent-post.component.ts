import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-recent-post',
  templateUrl: './recent-post.component.html',
  styleUrls: ['./recent-post.component.scss']
})
export class RecentPostComponent implements OnInit {
blogs = [];
posts: any;
  constructor(private postService: PostService) { }

  ngOnInit() {
    
    this.getFeaturedPost('Food');
    this.getFeaturedPost('Travel');
    this.getFeaturedPost('LifeStyle');

  }

  getPost(){
    this.postService.getPosts().subscribe((data) => this.posts = data);
  }

  getFeaturedPost(category)
{ 
  this.postService.getPosts().subscribe((data) =>{
     this.posts = data;
       this.blogs.push(this.posts.filter((data) => category == data.category)[0]);
       console.log(this.blogs)
    });
  

}



}
