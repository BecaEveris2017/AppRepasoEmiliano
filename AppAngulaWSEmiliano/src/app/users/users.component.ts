import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users : IUsers[];

  ngOnInit() {
  }

  constructor(private postService:PostService){
    postService.getUsers().subscribe(user =>{
      console.log(user);
    this.users=user;
    
    });
}
}

interface IUsers{
  id :string;
  name : string;
  username : string;
  email : string;
  phone : string;
  website : string;
  }

interface IAddrees{
   street :string;
   suite : string;
   city : string;
   zipcode : string;
  }

 interface IGeo{
   lat :string;
   lng : string;
  }

 interface ICompany{
   name :string;
   catchPhrase : string;
   bs : string;
 }