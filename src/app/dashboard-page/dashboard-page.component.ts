import { Component, OnInit } from '@angular/core';
import {AuthService} from "../angular-fire/auth-service.service";
import {Router} from "@angular/router";
import {User} from "../user.model";
import { DatabaseService } from '../angular-fire/database.service';
import { trigger, 
        transition,
        style,
        animate } from '@angular/animations';


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ opacity: 0 }),
            animate('0.3s ease-out', 
                    style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ opacity: 1 }),
            animate('0.3s ease-in', 
                    style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class DashboardPageComponent implements OnInit {

  user: User;
  open: boolean;
  userData: any;
  users: any;
  dropDown: boolean = false;

  constructor( private _data: AuthService, private router: Router, private _db: DatabaseService) {
      this.userData = _data.userData;
  }

  ngOnInit() {

    this._db.usersObservable.subscribe(d => console.log(d), err => console.log(err), () => console.log("Completed."));
    if(!this._data.userExists){
      this.router.navigate(['/homePage']);
    }

    this.user = {
      time: 'Good Morning',
      name: this._data.user.name
    };
    this.open = false;


  }

  toggleDropDown() {
    this.dropDown = !this.dropDown
  }

  signOut() {
    this._data.signOut();
    console.log("made");
    this.router.navigate(['/homePage']);
    console.log("it");
  }



  toggleNav(){
    this.open = !this.open;
  }

}
