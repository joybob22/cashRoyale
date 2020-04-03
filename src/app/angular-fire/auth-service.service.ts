import { Injectable } from '@angular/core';
import {User} from '../user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable()
export class AuthService {

public userData: object;
public user: User;
  constructor(public authModule: AngularFireAuth) {
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

  dbLogout() {
    this.authModule.signOut().then(data => {
      console.log("success Logout");
    });
  }

  dbLogin(email: string, pswd: string) {
    this.authModule.signInWithEmailAndPassword(email, pswd).then(bruh => {console.log(bruh.user)}).catch(err => {
      console.error(`ERROR: ${err}`);
    });
  }

  dbGetUser() {
    return this.authModule.currentUser;
  }

}
