import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  name: string = "ahmed";
  name2: string = "MOHAMED";

  hello: string = "Hello22";

  date = new Date();

  content: string = "i love angular and typescript and html and css"



  constructor() { }

  ngOnInit(): void {
  }

}


/**
 * PIPE => transforming data [ strings - curreny amounts - date ]
 * pipe is simple function()
 * used in html template 
 * {{ | pipe }} | pipe operator
 * {{ | pipe: paramter : paramter }}
 * {{ | pipe | pipe }}
 * @Pipe({ name: nameOfPipe }) => decorator pipe
 * name.pipe.ts
 */