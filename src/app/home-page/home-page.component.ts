import { Component, OnInit } from '@angular/core';
import {AuthService} from "../angular-fire/auth-service.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  user: any;
  err: any;
  constructor(private _auth: AuthService, private router: Router) {


  }

  ngOnInit() {
    this.user = {

        password:"",
        email: "",

      name: ""
    }
  }

  registerUser(){
    this._auth.registerUser(this.user).subscribe(registerData => {
      this._auth.loginWithEmail(registerData).subscribe(loginData => {
          this.router.navigate(['../dashboardPage']);
      }, loginError => {

          this.err = loginError;

      });
    }, registerError => {
      this.err = registerError;
    });

  }


}
