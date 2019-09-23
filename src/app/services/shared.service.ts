import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  user:any;
  blogs: any;
  dataSource : any;
  blogSource : any;
  data : any;

  constructor(private postService: PostService) { 
    this.getLoginData();
    this.getBlogData();
  }

  getLoginData(){
    this.user = localStorage.getItem('users');
    this.dataSource = new BehaviorSubject<any>(this.user);
    this.data = this.dataSource.asObservable();
    return this.data;
  }

  updatedLoginData(data){
    this.dataSource.next(data);
  }

getBlogData(){
 this.postService.getPosts().subscribe(
   (data) => {
    this.blogSource = new BehaviorSubject<any>(data);
  this.blogs = this.blogSource.asObservable(); 

  }
 )
 return this.blogs;
 
}

  updateBlogData(data){
    this.dataSource.next(data);
  }
}