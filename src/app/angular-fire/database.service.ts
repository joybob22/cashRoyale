import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {AngularFire, FirebaseListObservable} from "angularfire2";


/*
 Generated class for the FirebaseService provider.
 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class DatabaseService {

  users: any[];
  firebaseUsers: FirebaseListObservable<any[]>;
  constructor(public http: Http, public af: AngularFire) { //private _auth: AuthService
    console.log('Hello FirebaseService Provider');

    this.firebaseUsers = af.database.list("/users"); // + "/" + _auth.uId + "/topics");
    this.firebaseUsers.subscribe(data => {
      this.users = data;
    });
  }
}
