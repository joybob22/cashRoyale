import { Injectable } from '@angular/core';
import {User} from '../user.model';

@Injectable()
export class AuthService{

public userData: object;
public user: User;
  constructor() {
      this.userData = JSON.parse(localStorage.getItem('userData'));
      this.user = JSON.parse(localStorage.getItem('user'));
  }


saveUserData () {
  localStorage.setItem('userData', JSON.stringify(this.userData));
}
get userExists(){
    // if(this.userData) {
    //   return true;
    // }
    // return false;
    if(JSON.parse(localStorage.getItem('userData'))) {
      return true;
    } else {
      return false;
    }
}

  registerUser(credentials: any) {
    localStorage.setItem('user',JSON.stringify(credentials));
    localStorage.setItem('userData',JSON.stringify({
      budget: [],
      checkbook:[
        {
          name: 'Zions Bank',
          items: []
        }

      ]

    }));
    this.user = credentials;
  }
  loginWithEmail(credentials) {
      if(!credentials.name){
        credentials.name = 'You';
      }
      localStorage.setItem('user', JSON.stringify(credentials));
  }

  signOut() {

    localStorage.setItem('user', null);
    localStorage.setItem('userData', null);
  }



}
