import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    localStorage.setItem('auth', 'true');
     // Store.dispatch(Login())
  }

  logout() {
    localStorage.clear()
  }

}
