import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../angular-fire/auth-service.service";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  user: any;

  constructor(private router: Router, private _data: AuthService) {


  }

  ngOnInit() {
    this.user = {
        password: '',
        email: '',

      name: ''
    };
  }

  registerUser() {
      this._data.registerUser(this.user);
      this.router.navigate(['../dashboardPage']);
  }


}
