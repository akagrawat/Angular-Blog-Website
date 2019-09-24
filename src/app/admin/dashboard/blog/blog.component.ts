import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { SharedService } from '../../../services/shared.service';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
 Category: Array<any> = ['', 'Food', 'Travel', 'LifeStyle'];
 blogForm: FormGroup;
 blogStatus: String = ''; 
 blogs: any ; // blog list
 blogId: String;
 blogInfo: any;

  validationMsg = [
    {
      'title':[
      {type: 'required', message: 'Title is required'},
      {type: 'maxlength', message: 'Enter less than 300 characters'},
      {type: 'minlength', message: 'Enter minimum 5 characters'},]
    },
  
    {'category': [ 
      {type: 'required', message: 'Category is required'},
   ],
    },
    {'imageUrl': [
      
     {type: 'pattern', message: 'Enter a valid URL'},
      ],
    },
    {'description': [
      {type: 'required', message: 'Description required'},
      {type: 'maxlength', message: 'Enter less than 1000 characters'},
      {type: 'minlength', message: 'Enter minimum 5 characters'},],
     },
   ]
   
  constructor(private postService: PostService,
              private fb: FormBuilder, 
              private sharedService: SharedService ) { }

  ngOnInit() {
    this.sharedService.getBlogData().subscribe((data) => {
      this.blogs = data;
      // set default url if blog doesn't have
      for(let blog of this.blogs){
      if(!blog.imageUrl){
        blog.imageUrl = 'http://static1.squarespace.com/static/52406c2ae4b02a75078310d2/t/56047f6de4b0a2d546f00a58/1515523853963/';
      }
    }    
});

   this.createBlogForm();
   
  }

  createBlogForm(){
    this.blogForm = this.fb.group({
      title: ['', Validators.compose([
        Validators.maxLength(300),
        Validators.minLength(3),
        Validators.required
      ])],
      author: ['', Validators.compose([
        Validators.maxLength(100),
        Validators.minLength(3),
        
      ])],
      category: ['', Validators.compose([
        Validators.required, 
        
      ])],
      imageUrl: [''],
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
      this.sharedService.updateBlogData(this.blogs);   
});

}
  getBlogId(key){
 this.blogId = key;
  }

  updateBlog(data){
    // Add id in data object
    let blogData = {'id': this.blogId, ...data};
    this.postService.updatePost(blogData).subscribe(
      (data) => {
        this.blogStatus = 'update'; // show confirmation message
      this.getBlogs();
      this.resetForm();
      setTimeout(()=> this.blogStatus = '', 1500)
    });
  }

  createBlog(data){
    let user  = JSON.parse(localStorage.getItem('users'));
    let author = user.success.role;
    data = {...data, 'author': author}
  
    this.postService.createPost(data).subscribe(
      (data) => {this.blogStatus = 'create'; // show confirmation message
      this.getBlogs(); this.resetForm();
      setTimeout(()=> this.blogStatus = '', 1500)})
  }

  showData(data){
    this.blogForm.patchValue(data);
    // Blog info used for show and hide  buttons fields(save & update)
    this.blogInfo = data;
  }

  resetForm(){
    this.blogForm.reset();
  }

}
