import { BdService } from 'src/app/core/services/bd.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input()
  photoCover:string='';
  @Input()
  contentTitle:string='';
  @Input()
  contentDescription:string ='';
  @Input()
  id:number | null = 0;

  constructor(private route: ActivatedRoute, private service:BdService) { }

  ngOnInit(): void {
     this.route.paramMap.subscribe(route =>this.id = Number(route.get("id")));
     this.service.getPosts().subscribe(posts=>{
      posts.filter(post=> post.id == this.id)
      .map(post=>{
        this.photoCover = post.photo;
        this.contentTitle = post.title;
        this.contentDescription = post.description;
      })      
     })
  }

}
