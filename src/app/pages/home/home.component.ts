import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/core/services/bd.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Post[] = [];
  postsWithoutFirts: Post[] | undefined = [];

  constructor(private http: BdService) { }

  ngOnInit(): void {
    this.http.getPosts().subscribe(data => {
      this.posts = data;    
      this.postsWithoutFirts = this.posts.filter(post => post.id != 1);    
    });   
  }

}
