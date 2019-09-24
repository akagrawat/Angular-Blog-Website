import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  blogs: any;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.sharedService.getBlogData().subscribe((data) => {
    this.blogs = data;
    console.log(this.blogs)
      // set default url if blog doesn't have
      for (let blog of this.blogs) {
        if (!blog.imageUrl) {
          blog.imageUrl = 'http://static1.squarespace.com/static/52406c2ae4b02a75078310d2/t/56047f6de4b0a2d546f00a58/1515523853963/';
        }
      }
    });
  }

}
