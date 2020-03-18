import { Component, OnInit } from '@angular/core';
import {AuthService} from "../angular-fire/auth-service.service";
import {Router} from "@angular/router";
import {User} from "../user.model";
import { DatabaseService } from '../angular-fire/database.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  user: User;
  open: boolean;
  userData: any;
  users: any;

  constructor( private _data: AuthService, private router: Router, private _db: DatabaseService) {
      this.userData = _data.userData;
  }

  ngOnInit() {

    this._db.usersObservable.subscribe(d => console.log(d), err => console.log(err), () => console.log("Completed."));
    if(!this._data.userExists){
      this.router.navigate(['../homePage']);
    }

    this.user = {
      time: 'Good Morning',
      name: this._data.user.name
    };
    this.open = false;


  }



  toggleNav(){
    this.open = !this.open;
  }

}
