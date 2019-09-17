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
    {'image': [
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
    this.blogs = this.postService.getPosts();
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
      image: ['', Validators.compose([
        Validators.required
      ])],
      description: ['', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])],
    })

  }
  showData(data){
    this.blogForm.patchValue(data);
  
  }
}
