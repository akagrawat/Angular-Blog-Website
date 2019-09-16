import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  updateBlogForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    category: new FormControl(''),
    image: new FormControl(''),
    description: new FormControl('')
  })
  blogs: any ;
   
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.blogs = this.postService.getPosts();
  }

  showData(data){
    this.updateBlogForm.patchValue(data);
  
  }
}
