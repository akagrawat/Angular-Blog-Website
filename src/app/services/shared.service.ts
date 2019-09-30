import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  user: any;
  blogs: any = '';
  blogData=new BehaviorSubject<any>('');
  loginUser = new BehaviorSubject<any>('');

  constructor(private postService: PostService) {
    this.user = localStorage.getItem('users');
    this.loginUser.next(this.user);

    this.postService.getPosts().subscribe((data) => {
      this.blogs = data;

      this.blogData.next(this.blogs.reverse());
    })

  }

  getLoginData(): Observable<any> {
    return this.loginUser.asObservable();
  }

  updatedLoginData(data) {
    this.loginUser.next(data);
  }

  getBlogData(): Observable<any> {
    return this.blogData.asObservable();
  }

  updateBlogData(data) {
    this.blogData.next(data);
  }
}