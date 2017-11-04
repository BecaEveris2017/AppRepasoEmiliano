import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class PostService{
    constructor(private http:Http){
        console.log('post service');
    }


    getPost(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts').map(response => response.json());
    }

    getComments(){
        return this.http.get('https://jsonplaceholder.typicode.com/comments').map(response => response.json());
    }

    getAlbums(){
        return this.http.get('https://jsonplaceholder.typicode.com/albums').map(response => response.json());
    }

    getPhotos(){
        return this.http.get('https://jsonplaceholder.typicode.com/photos').map(response => response.json());
    }

    getTodos(){
        return this.http.get('https://jsonplaceholder.typicode.com/todos').map(response => response.json());
    }

    getUsers(){
        return this.http.get('https://jsonplaceholder.typicode.com/users').map(response => response.json());
    }
}
