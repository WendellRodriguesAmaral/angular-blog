import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';


@Injectable({
  providedIn: 'root'
})
export class BdService {

  constructor(private http:HttpClient) { }

  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>('http://localhost:3000/posts');
  }
}
