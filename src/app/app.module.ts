import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { productReducer } from './ngrx-arr-test/arr.reducer';
import { productReducerTest } from './ngrx-arr-test/product.reducer';
import { FormsComponent } from './forms/forms.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormValidateComponent } from './forms/form-validate/form-validate.component';
import { CustomeValidateComponent } from './forms/custome-validate/custome-validate.component';
import { PipeComponent } from './pipe/pipe.component'
import { ExponentialStrengthPipe } from './pipe/pipes/exponential-strength.pipe';
import { NewPipePipe } from './pipe/pipes/new-pipe.pipe';
import { AvatarTestComponent } from './avatar-test/avatar-test.component';
import { DefaultImagePipe } from './pipe/pipes/default-image.pipe';
import { BasicsComponent } from './basics/basics.component';
import { CoursesComponent } from './http/courses/courses.component';
import { AppInterceptors } from './app.interceptors';
import { ErrorHanldeInterceptor } from './error-hanlde.interceptor';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { SingleProjectComponent } from './content-projection/single-project/single-project.component';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { PostsComponent } from './component/posts/posts.component';

let rootReducers = {
  countR: counterReducer, 
  productReducer: productReducer 
}

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    FormValidateComponent,
    CustomeValidateComponent,
    PipeComponent,
    ExponentialStrengthPipe,
    NewPipePipe,
    AvatarTestComponent,
    DefaultImagePipe,
    BasicsComponent,
    CoursesComponent,
    LifecycleComponent,
    SingleProjectComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    NotFoundComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({productRed: productReducerTest}), // { key: reducerName }
    // StoreModule.forRoot({ productR:  productReducer}), // { key: reducerName }

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AppInterceptors, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorHanldeInterceptor, multi: true} 
  ], // create more interceptors { one }, { tow }
  bootstrap: [AppComponent]
})
export class AppModule { }
