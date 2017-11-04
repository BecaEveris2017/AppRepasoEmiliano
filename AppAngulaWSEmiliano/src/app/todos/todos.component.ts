import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos : ITodo[];
  ngOnInit() {
  }

  constructor(private postService:PostService){
    postService.getTodos().subscribe(todo =>{
      console.log(todo);
    this.todos=todo;
    });

}
}

interface ITodo{
  userId :string;
  id : string;
  title : string;
  completed : string;
  
}