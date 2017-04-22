import { Component, OnInit } from '@angular/core';
import {AngularFire, AngularFireDatabase, FirebaseListObservable} from "angularfire2";
import {AuthService} from "../angular-fire/auth-service.service";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  user: object;
  open: boolean;

  key: any;

  users: FirebaseListObservable<any>;
  firebaseUser: any;

  constructor(public af: AngularFire, private _auth: AuthService ) {

    this.firebaseUser = af.database.list("/users");
    this.firebaseUser.subscribe(data => {
      this.users = data[1];
      console.log(this.users);

    });





  }

  ngOnInit() {

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
