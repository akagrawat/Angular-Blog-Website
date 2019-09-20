import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
 blogForm: FormGroup;
  blogs: any ;
  blogId: any;
  validationMsg = [
    {
      'title':[
      {type: 'required', message: 'Title is required'},
      {type: 'maxlength', message: 'Enter less than 50 characters'},
      {type: 'minlength', message: 'Enter minimum 5 characters'},]
    },
    {'author': [
     {type: 'required', message: 'Author is required'},
     {type: 'maxlength', message: 'Enter less than 25 characters'},
     {type: 'minlength', message: 'Enter minimum 3 characters'},],
    },
    {'category': [ 
      {type: 'required', message: 'Category is required'},
      {type: 'maxlength', message: 'Enter less than 25 characters'},
      {type: 'minlength', message: 'Enter minimum 3 characters'},
   ],
    },
    {'imageUrl': [
     {type: 'required', message: 'Image is required'},
      ],
    },
    {'description': [
      {type: 'required', message: 'Description required'},
      {type: 'maxlength', message: 'Enter less than 200 characters'},
      {type: 'minlength', message: 'Enter minimum 5 characters'},],
     },
   ]
   
  constructor(private postService: PostService,
              private fb: FormBuilder) { }

  ngOnInit() {
   this.getBlogs();
    this.createBlogForm();
  }

  createBlogForm(){
    this.blogForm = this.fb.group({
      title: ['', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(3),
        Validators.required
      ])],
      author: ['', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(3),
        Validators.required
      ])],
      category: ['', Validators.compose([
        Validators.required, 
        
      ])],
      imageUrl: ['',],
      description: ['', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])],
    })

  }
  
  getBlogs(){
    this.postService.getPosts().subscribe((data) => {
      this.blogs = data;
    console.log(this.blogs);
    })
  }
  getBlogId(key){
 this.blogId = key;
  }

  updateBlog(data){

    let blogData = {'id': this.blogId, ...data};
    this.postService.updatePost(blogData).subscribe(
      (data) => { console.log(data);
        this.getBlogs()});
  }
  createBlog(data){
    this.postService.createPost(data).subscribe(
      (data) => {console.log(data); this.getBlogs()})
  }
  showData(data){
    this.blogForm.patchValue(data);
  
  }
}
