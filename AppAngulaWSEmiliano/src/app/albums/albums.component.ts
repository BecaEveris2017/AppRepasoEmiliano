import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
 
})
export class AlbumsComponent implements OnInit {
  albums : IAlbum[]
  ngOnInit() {
  }

  constructor(private postService:PostService){
    postService.getAlbums().subscribe(album =>{
      console.log(album);
    this.albums=album;
    });

}
}

interface IAlbum {
  userId :string;
  id : string;
  title : string;
  body : string;
  
}
