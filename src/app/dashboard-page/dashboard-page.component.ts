import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  user: object;
  open: boolean;

  constructor() { }

  ngOnInit() {

    this.open = false;

    this.user = {
      name: "Bob",
      time: "Good afternoon"
    }

  }

  toggleNav(){
    this.open = !this.open;
  }

}
