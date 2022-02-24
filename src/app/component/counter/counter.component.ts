import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreCounterInterface } from 'src/app/store/store';
import { DECREMENT, INCREMENT } from '../../store/counter_2/counter2.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  // count$: Observable<number>;
  count: number;
  constructor(private store: Store<StoreCounterInterface>) { // couner key from app module counter: counterReducer 
    // private store: Store<{ count: number }>
    // this.count$ = this.store.select('count');
    // store => obervable
    this.store.subscribe(data => {
      this.count = data.count_2.count;
      console.log(data);
    })

  }

  ngOnInit(): void {
  }

  increment() { 
    // this.store.dispatch(increment())
    this.store.dispatch({ type: INCREMENT, countNum: 2 })
  }
  decrement() {
    // this.store.dispatch(decrement())
    this.store.dispatch({ type: DECREMENT, countNum: 2 })
  }
  // reset() {
  //   this.store.dispatch(reset())
  // }
  

}
