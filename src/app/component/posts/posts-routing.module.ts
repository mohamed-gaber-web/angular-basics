import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { AuthGuardChild } from 'src/app/core/guards/child-auth.guard';
import { PostsResolver } from 'src/app/core/guards/posts.resolver';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsComponent } from './posts.component';

const routes: Routes = [
  {
    path: '', component: PostsComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuardChild], children: [
      { path: 'post-details/:postId', component: PostDetailsComponent, resolve: { postDetailsResolve: PostsResolver } },
      { path: 'add-post', component: AddPostComponent },
      { path: 'edit-post', component: EditPostComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
