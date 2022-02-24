import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(public activatedRoute: ActivatedRoute, private router: Router) { 
    console.log(this.activatedRoute);
    this.activatedRoute.fragment.subscribe(d => {
      console.log('fragnment', d);
    })
   }

  ngOnInit(): void {
  }

  goToLogin() {
    this.router.navigateByUrl('login'); // navigate(['', extras])
  }

}
