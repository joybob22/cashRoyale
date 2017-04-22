import { Component, OnInit } from '@angular/core';
import {AuthService} from "../angular-fire/auth-service.service";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  user: any;
  constructor(private _auth: AuthService) {


  }

  ngOnInit() {
    this.user = {
      name: "",
      email: "",
      password:""
    }
  }

}
