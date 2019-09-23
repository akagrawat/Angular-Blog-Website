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
  this.getPosts();
  
  }

  getPosts(){
    this.postService.getPosts().subscribe((data) => {this.blogs = data;
      // set default url if blog doesn't have
      for(let blog of this.blogs){
        if(!blog.imageUrl){
          blog.imageUrl = 'http://static1.squarespace.com/static/52406c2ae4b02a75078310d2/t/56047f6de4b0a2d546f00a58/1515523853963/';
        }
      }    
    
      }
    );}
    
  }
