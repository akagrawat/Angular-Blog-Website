import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-description',
  templateUrl: './post-description.component.html',
  styleUrls: ['./post-description.component.scss']
})
export class PostDescriptionComponent implements OnInit {
  blogDetail: any;

  constructor(private postService: PostService, 
              private route: ActivatedRoute, 
              private location: Location) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getPostDescription(id);
   
  }
  
  // Blog details according to id
  getPostDescription(data){
    this.postService.getPostById(data).subscribe(
      (res) => { 
        this.blogDetail = res;
        console.log(this.blogDetail.author);
        // set default image if blog doesn't have
        if(!this.blogDetail.imageUrl){
          this.blogDetail.imageUrl = 'http://static1.squarespace.com/static/52406c2ae4b02a75078310d2/t/56047f6de4b0a2d546f00a58/1515523853963/'
        }
      }  
    );
  }

  goBack(){
    this.location.back();
  }

}
