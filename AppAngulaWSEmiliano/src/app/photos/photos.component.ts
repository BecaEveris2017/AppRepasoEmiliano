import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos : IPhoto[];

   ngOnInit() {
  }

  constructor(private postService:PostService){
    postService.getPhotos().subscribe(photo =>{
      console.log(photo);
    this.photos=photo;
    });
}
}

interface IPhoto{
  albumId :string;
  id : string;
  title : string;
  url : string;
  thumbnailUrl : string;
  
}
