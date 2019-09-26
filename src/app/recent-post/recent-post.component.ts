import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { SharedService } from '../services/shared.service';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-recent-post',
  templateUrl: './recent-post.component.html',
  styleUrls: ['./recent-post.component.scss']
})
export class RecentPostComponent implements OnInit {
blogs: Array<any>= [];
posts: any;
  constructor(private postService: PostService,
              private sharedService: SharedService) { }

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
  this.sharedService.getBlogData().subscribe((data) =>{
     this.posts = data; 
     if(this.posts){
       this.blogs.push(this.posts.filter((data) => category == data.category)[0]);
     }
    });
}


}
