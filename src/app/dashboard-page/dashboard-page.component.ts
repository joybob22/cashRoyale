import { Component, OnInit } from '@angular/core';
import {AuthService} from "../angular-fire/auth-service.service";
import {Router} from "@angular/router";
import {DatabaseService} from "../angular-fire/database.service";
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  user: object;
  open: boolean;
  allUsers: FirebaseListObservable<any[]>;
  checkbooks: any[];
  firebaseCheckbooks: FirebaseListObservable<any[]>;
  budgets: any[];
  firebaseBudgets: FirebaseListObservable<any[]>;


  constructor( private _auth: AuthService, private router: Router, private _database: DatabaseService, private af: AngularFire) {
    this._auth.loginWithEmail({
      email: "phone@email.com",
      password: 'password1234'
    });

    this.allUsers = this._database.firebaseUsers;
      // this.userData = _data;
    this.firebaseBudgets = af.database.list("/users/" + _auth.uId + "/topics");
    this.firebaseBudgets.subscribe(data => {
      this.budgets = data;
      console.log(data);
    });
  }

  ngOnInit() {

    // if(!this._data.userExists){
    //   this.router.navigate(['../homePage']);
    // }

    this.user = {
      time: 'Good Morning',
      name: 'Bob'
    };
    this.open = false;


  }



  toggleNav(){
    this.open = !this.open;
  }

}
