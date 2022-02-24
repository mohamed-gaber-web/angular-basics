import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post', loadChildren: () => import('./component/posts/posts.module').then(m => m.PostsModule) },
  { path: 'user', loadChildren: () => import('./component/users/users.module').then(m => m.UsersModule) },
  // { path: 'user', loadChildren: 'users/users.module#UserModule' },
  { path: 'not-login', redirectTo: 'login',  pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // in forRoot(routes, { preloadingStrategy: PreloadAllModules })
  // { preloadingStrategy: PreloadAllModules } => load important page and after load pages load lazy loading page one load
  exports: [RouterModule]
})
export class AppRoutingModule { }
