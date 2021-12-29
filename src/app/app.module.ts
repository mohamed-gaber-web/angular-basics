import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { productReducer } from './ngrx-arr-test/arr.reducer';
import { productReducerTest } from './ngrx-arr-test/product.reducer';
import { FormsComponent } from './forms/forms.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormValidateComponent } from './forms/form-validate/form-validate.component';
import { CustomeValidateComponent } from './forms/custome-validate/custome-validate.component'

let rootReducers = {
  countR: counterReducer, 
  productReducer: productReducer 
}

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    FormValidateComponent,
    CustomeValidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({productRed: productReducerTest}), // { key: reducerName }
    // StoreModule.forRoot({ productR:  productReducer}), // { key: reducerName }

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
