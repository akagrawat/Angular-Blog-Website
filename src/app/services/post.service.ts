import { Injectable } from '@angular/core';
import { Blogs } from '../services/post-mock';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts(){
    return Blogs;
  }
  getFeaturedPost(category) {
    return Blogs.filter((data) => category == data.category )[0];
  }
}
