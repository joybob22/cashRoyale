import { Component, OnInit } from '@angular/core';
import {AuthService} from "../angular-fire/auth-service.service";
import {Router, ActivatedRoute} from "@angular/router";
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
            style({ left: '330px' }),
            animate('0.3s ease-out', 
                    style({ left: '130px' }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ left: '130px' }),
            animate('0.3s ease-in', 
                    style({ left: '330px' }))
          ]
        )
      ]
    ),
    trigger(
      'slideDown', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0 }),
            animate('0.3s ease-out', 
                    style({ height: '50px' }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: '50px' }),
            animate('0.3s ease-in', 
                    style({ height: 0 }))
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

  constructor( private _data: AuthService,
     private router: Router,
      private _db: DatabaseService, 
      private route: ActivatedRoute) {
      this.userData = _data.userData;
  }

  ngOnInit() {
    this._db.usersObservable.subscribe(d => console.log(d), err => console.log(err), () => console.log("Completed."));
    if(!this._data.userExists){
      this.router.navigate(['/homePage']);
    } else {
      this.user = {
        time: 'Good Morning',
        name: this._data.user.name
      };
    }

    
    this.open = false;


  }

  toggleDropDown() {
    this.dropDown = !this.dropDown
  }

  signOut() {
    this._data.signOut();
    this.router.navigate(['/../homePage'], {relativeTo: this.route});
  }



  toggleNav(){
    this.open = !this.open;
  }

}
