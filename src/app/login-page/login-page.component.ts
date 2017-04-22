import {Component, OnInit} from '@angular/core';
import {AuthService} from '../angular-fire/auth-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  user: any;
  constructor(private _auth: AuthService) {

  }

  ngOnInit() {
    this.user = {
      email: '',
      password: ''
    };
  }

  loginUser() {
    this._auth.loginWithEmail({
      email: this.user.email,
      password: this.user.password
    });
  }

}
