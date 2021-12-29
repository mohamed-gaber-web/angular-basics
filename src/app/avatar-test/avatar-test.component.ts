import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar-test',
  templateUrl: './avatar-test.component.html',
  styleUrls: ['./avatar-test.component.scss']
})
export class AvatarTestComponent implements OnInit {

  avatar: string;

  constructor() { 
    setTimeout(() => {
      this.avatar = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/751678/skytsunami.png"
    }, 5000)
  }

  ngOnInit(): void {
  }

}
