import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {

  userName: string = "ahmed"
  age: number = 30

  constructor() { }

  ngOnInit(): void {
  }

}
