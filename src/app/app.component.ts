import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from './counter.action';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { IProduct } from './model/product.model';
import { ADD_PRODUCT } from './ngrx-arr-test/product.reducer';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // @ViewChild(ref) name: ElementRef;
  @ViewChild('h1Tag', { static: false }) paretntTag: ElementRef;
  @ViewChild('childView', { static: false, read: ElementRef }) lifeCycleComponent: LifecycleComponent;

  // count$: Observable<number>;
  products$: Observable<IProduct[]>;
  title: string = "Hello Lifcycle";

  constructor(private store: Store<{ countR: number, productRed: [] }>) {
    // this.count$ = store.select('countR');
    // this.products$ = store.select('productR')
    this.products$ = store.select('productRed')
    store.subscribe(d => {
      console.log(d);
    })
  }

  ngOnInit(): void {
    // when use @viewchild here { static: true }
  }

  ngAfterViewInit(): void {
    console.log('form parent component', 
    this.lifeCycleComponent);
  }

  // increment() {
  //   this.store.dispatch(increment())
  // }

  // decrement() {
  //   this.store.dispatch(decrement())
  // }

  // reset() {
  //   this.store.dispatch(reset())
  // }

  addProduct(name: string, price: number) {
    this.store.dispatch(ADD_PRODUCT({ name: name, price: price }))
  }
}
