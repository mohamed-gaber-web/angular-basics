import { Attribute, Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from './counter.action';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { IProduct } from './model/product.model';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // @ViewChild(ref) name: ElementRef;
  @ViewChild('h1Tag', { static: false }) paretntTag: ElementRef;
  @ViewChild('childView', { static: false, read: ElementRef }) lifeCycleComponent: LifecycleComponent;


  imgSrc: string = "";
  form: boolean = false;
  head1Class: string = 'proBi';
  errorMsg: string = ''

  styleAttr = "font-size: 20px; color: red";
  styleFontSize = '50px';

  // count$: Observable<number>;
  products$: Observable<IProduct[]>;
  title: string = "Hello Lifcycle";

  constructor(
    private store: Store<{ countR: number, productRed: [] }>,
    @Attribute('type') public type: string,
    private apiService: ApiService
  ) {
    // this.count$ = store.select('countR');
    // this.products$ = store.select('productR')
    this.products$ = store.select('productRed')
    store.subscribe(d => {
      console.log(d);
    })
  }

  ngOnInit(): void {
    // when use @viewchild here { static: true }
    this.getPosts();
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

  getPosts() {
    this.apiService.getPosts()
      .subscribe((response) => {
        console.log(response);
      }, (error) => {
        // this.errorMsg = error;
        // alert(this.errorMsg)
        // throw new Error('exist error 404')
        // if (error) {
        //   alert('this page not found')
        // }
        //  console.log('error inside component');
        console.log('this error handling from service', error);
        
      }, () => {
        console.log('completed');
      })
  }

}
