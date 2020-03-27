import { Component, OnInit} from '@angular/core';
import {DatabaseService} from "../../angular-fire/database.service";
import {AuthService} from "../../angular-fire/auth-service.service";

@Component({
  selector: 'app-checkbook-page',
  templateUrl: './checkbook-page.component.html',
  styleUrls: ['./checkbook-page.component.scss']
})
export class CheckbookPageComponent implements OnInit {

  checkbooks = [
    {
      name: 'Bank of America',
      items: [
        {
          date: '01/01/2011',
          money: '300',
          add: '+',
          description: 'Found Money',
          newAmount: 1700
        },
        {
          date: '01/01/2011',
          money: '450',
          add: '-',
          description: 'Bought Dog',
          newAmount: 1400
        },
        {
          date: '01/01/2011',
          money: '900',
          add: '+',
          description: 'Got Paid',
          newAmount: 1850
        },
        {
          date: '01/01/2011',
          money: '50',
          add: '-',
          description: 'Video Game',
          newAmount: 950
        },
        {
          date: '01/01/2011',
          money: '450',
          add: '-',
          description: 'Fixed Car',
          newAmount: 1000
        }
      ]
    },
    {
      name: 'Spending',
      items: [
        {
          date: '01/01/2011',
          money: '900',
          add: '+',
          description: 'Got Paid',
          newAmount: 1850
        },
        {
          date: '01/01/2011',
          money: '50',
          add: '-',
          description: 'Video Game',
          newAmount: 950
        },
        {
          date: '01/01/2011',
          money: '450',
          add: '-',
          description: 'Fixed Car',
          newAmount: 1000
        }
      ]
    }
  ];
  checkbookIndex = 0;
  checkbookTitle;
  constructor(authService: AuthService) {

    this.checkbookTitle = this.checkbooks[this.checkbookIndex].name;
  }

  menuState:boolean = false;

  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === false ? true : false;
  }

  switchCheckbook(index) {
    this.checkbookIndex = index;
    this.checkbookTitle = this.checkbooks[this.checkbookIndex].name;
    this.toggleMenu();
  }

  deleteCheckbook(index) {
    if(!(this.checkbooks.length === 1)) {
      if(index === this.checkbookIndex) {
        if(this.checkbookIndex === 0) {
          this.checkbookIndex = 1;
          this.checkbooks.splice(index, 1);
        } else {
          this.checkbookIndex--;
          this.checkbooks.splice(index, 1);
        }
      } else {
        this.checkbooks.splice(index, 1);
      }
    }
  }

  deleteItem(index) {
    this.checkbooks[this.checkbookIndex].items.splice(index, 1);
  }

  ngOnInit() {

  }

}
