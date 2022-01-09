import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})


export class LifecycleComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  OnDestroy {

  // set input
  @Input() set myTitle(name: string) {
    console.log(name);    
  }
  
  // -- one 
  constructor() { 
    console.log('in constructor');
  }

  // -- three with component init
  ngOnInit(): void {
    // work with component run
    // run one yet
    console.log('ng on init');
    this.myTitle;
  }

  // -- tow
  ngOnChanges(changes: SimpleChanges): void {
      // the first method run in component
      // check changes happen in component
      // happen with @input and @Output
      console.log('ng on changes', changes);
  }

  // -- four => change detection
  ngDoCheck(): void {
      console.log('do check');
  }

  // -- five => content projection [ng-content]
  ngAfterContentInit(): void {
      // run one 
      console.log('ng after content init');
  }

  // -- six => contect projection + change detection
  ngAfterContentChecked() {
    console.log(' ng after content checked ');
  }

  // -- seven
  ngAfterViewInit(): void {
    // when component view [ UI ] fully init
  }

  // -- 8 change detection + view fully init 
  ngAfterViewChecked(): void {
    console.log('ng after view checked');
  }

  // -- unsubscribe - component end 
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }

}

/**
 * => content projection
 * <app-child> 
 * html
 * </app-child>
 * <ng-content select="h1"></ng-content>
 * selelct="tag class id"
 * how to make style css is global ? 
 * in parent component use encapsulation: viewEncapsulation.None
 * use this property indoor component decorator 
 * @ViewChild => look of element or child component from view
 * @ViewChildren => display list from loops child  type: QueryList<child-component>
 * ng-container => create element without display in DOM
 * @ContentChild - @ContentChildren - ngAfterContentInit
 */


/**
 * Change Detection
 * in decorator component add 
 */