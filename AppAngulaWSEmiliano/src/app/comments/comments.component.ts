import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  commp : IComm[];

  ngOnInit() {
  }

  constructor(private postService:PostService){
    postService.getComments().subscribe(comm =>{
      console.log(comm);
    this.commp=comm;
    });

}
}

interface IComm{
  postId :string;
  id : string;
  name : string;
  email : string;
  body : string;
  
}
