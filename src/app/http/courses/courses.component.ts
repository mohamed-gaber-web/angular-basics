import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getCourse().subscribe(result => {
      console.log(result);
      
    } )
  }

}
