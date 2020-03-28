import { Component, OnInit} from '@angular/core';
import {DatabaseService} from "../../angular-fire/database.service";
import {AuthService} from "../../angular-fire/auth-service.service";
import { ActivatedRoute } from '@angular/router';
import { CheckbookService } from '../checkbook.service';

@Component({
  selector: 'app-checkbook-page',
  templateUrl: './checkbook-page.component.html',
  styleUrls: ['./checkbook-page.component.scss']
})
export class CheckbookPageComponent implements OnInit {

  checkbook;
  checkbookIndex = 0;
  checkbookTitle;
  constructor(
    authService: AuthService, 
    private _route: ActivatedRoute, 
    private checkbookService: CheckbookService
    ) {
    // this.checkbookTitle = this.checkbook[this.checkbookIndex].name;


    
  }

  ngOnInit() {
    this.checkbook = this.checkbookService.getCheckbook(this._route.snapshot.params['id']);
    console.log(this.checkbook);

  }

  menuState:boolean = false;

  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === false ? true : false;
  }

  switchCheckbook(index) {
    this.checkbookIndex = index;
    this.checkbookTitle = this.checkbook[this.checkbookIndex].name;
    this.toggleMenu();
  }

  deleteCheckbook(index) {
    if(!(this.checkbook.length === 1)) {
      if(index === this.checkbookIndex) {
        if(this.checkbookIndex === 0) {
          this.checkbookIndex = 1;
          this.checkbook.splice(index, 1);
        } else {
          this.checkbookIndex--;
          this.checkbook.splice(index, 1);
        }
      } else {
        this.checkbook.splice(index, 1);
      }
    }
  }

  deleteItem(index) {
    this.checkbook[this.checkbookIndex].items.splice(index, 1);
  }



}
