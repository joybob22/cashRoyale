import { Component, OnInit } from '@angular/core';
import {AuthService} from "../angular-fire/auth-service.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private _auth: AuthService) {


  }

  ngOnInit() {
  }

}
