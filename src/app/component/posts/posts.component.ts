import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/core/services/posts.service';

import { take } from 'rxjs/operators';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private postsServ: PostsService) { }
  posts: any
  ngOnInit(): void {
    this.postsServ.getPosts().pipe(take(5)).subscribe(post => {
      console.log(post);
      this.posts = post;
    })
  }

}
