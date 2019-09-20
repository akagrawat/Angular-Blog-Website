import { Injectable } from '@angular/core';
import { Blogs } from '../services/post-mock';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
blogPostUrl: string = ' https://accedo-video-app-api.herokuapp.com/content';
createPostUrl: string = ' https://accedo-video-app-api.herokuapp.com/content';
updatePostUrl: string = ' https://accedo-video-app-api.herokuapp.com/content';
  constructor(private http: HttpClient) { }

  getPosts():Observable<any>{
    return this.http.get<any>(this.blogPostUrl);
  }

  createPost(data):Observable<any>{
    return this.http.post<any>(this.createPostUrl,data);
  }

  updatePost(data):Observable<any>{
    return this.http.put<any>(this.blogPostUrl, data);
  }
  getFeaturedPost(category) {
    return Blogs.filter((data) => category == data.category )[0];
  }
}
