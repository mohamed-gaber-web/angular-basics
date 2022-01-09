import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(public activatedRoute: ActivatedRoute) { 
    console.log(this.activatedRoute);
    this.activatedRoute.fragment.subscribe(d => {
      console.log('fragnment', d);
    })
    
   }

  ngOnInit(): void {
  }

}
