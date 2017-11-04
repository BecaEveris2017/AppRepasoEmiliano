import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts : IPost[];
  ngOnInit() {
  }

  constructor(private postService:PostService){
    postService.getPost().subscribe(post =>{
      console.log(post);
    this.posts=post;
    });

}
}

interface IPost {
  userId :string;
  id : string;
  title : string;
  body : string;
  
}
