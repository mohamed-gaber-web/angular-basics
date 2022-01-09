import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent implements OnInit {

  @ViewChild('h1Tag', { static: true }) theH1Tag: ElementRef<string>;

  constructor() { }

  ngOnInit(): void {
    console.log(this.theH1Tag.nativeElement);
  }

  // ngAfterViewInit(): void {
  //   this.theH1Tag.nativeElement
  //   console.log(this.theH1Tag.nativeElement);
  // }

}
