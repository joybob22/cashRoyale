import { Component, OnInit } from '@angular/core';
import {AuthService} from "../angular-fire/auth-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  user: object;
  open: boolean;


  constructor( private _data: AuthService, private router: Router) {

  }

  ngOnInit() {

    if(!this._data.userExists){
      this.router.navigate(['../homePage']);
    }

    this.user = {
      time: 'Good Morning',
      name: ''
    };
    this.open = false;


  }



  toggleNav(){
    this.open = !this.open;
  }

}
