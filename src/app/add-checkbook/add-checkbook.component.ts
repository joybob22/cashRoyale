import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../angular-fire/database.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add-checkbook',
  templateUrl: './add-checkbook.component.html',
  styleUrls: ['./add-checkbook.component.scss']
})
export class AddCheckbookComponent implements OnInit {

  checkbookName;
  date;
  description;
  money;
  checkbookIndex;
  plusMinus;
  plusMinusInfo = ['-', '+'];
  checkbookErrorMessage;
  itemErrorMessage;
  checkbookError = false;
  itemError = false;
  checkbooks;

  constructor(databaseService: DatabaseService, private _route: ActivatedRoute) {
    this.checkbooks = databaseService.users[1].checkbooks;
    this.checkbookIndex = _route.snapshot.params['index'];
  }

  // checkbooks = [
  //   {
  //     name: 'Vacation',
  //     items: [
  //
  //       {
  //         date: '01/01/2011',
  //         money: '300',
  //         add: '-',
  //         description: 'Found Money',
  //         newAmount: 1700
  //       },
  //       {
  //         date: '01/01/2011',
  //         money: '450',
  //         add: '+',
  //         description: 'Bought Dog',
  //         newAmount: 1400
  //       },
  //       {
  //         date: '01/01/2011',
  //         money: '900',
  //         add: '-',
  //         description: 'Got Paid',
  //         newAmount: 1850
  //       },
  //       {
  //         date: '01/01/2011',
  //         money: '50',
  //         add: '-',
  //         description: 'Video Game',
  //         newAmount: 950
  //       },
  //       {
  //         date: '01/01/2011',
  //         money: '450',
  //         add: '+',
  //         description: 'Fixed Car',
  //         newAmount: 1000
  //       }
  //     ]
  //   }
  // ];

  ngOnInit() {
  }

  addNewCheckbook() {
    if(this.checkbookName != '' && this.checkbookName != undefined) {
      this.checkbooks.push({
        name: this.checkbookName,
        items: []
      });
      this.checkbookName = "";
      this.checkbookError = false;
    } else {
      this.checkbookErrorMessage = 'Please enter a name for your checkbook';
      this.checkbookError = true;
    }

  }

  addNewItem() {
    if(this.date != '' && this.date != undefined) {
      if(this.plusMinus != undefined) {
        if(this.money != '' && this.money != undefined) {
          if(this.description != '' && this.description != undefined) {
            this.itemError = false;
            let amount;
            if(this.checkbooks[this.checkbookIndex].items.length > 0) {
              let preNum = this.checkbooks[this.checkbookIndex].items[0].newAmount;
              if(this.plusMinus === '+') {
                amount = Number(this.money) + preNum;
              } else {
                amount = preNum - Number(this.money);
              }
              console.log(this.plusMinus);
            } else {
              if(this.plusMinus === '+') {
                amount = this.money;
              } else {
                amount = 0 - Number(this.money);
              }
            }
            this.checkbooks[this.checkbookIndex].items.unshift({
              date: this.date,
              money: this.money,
              add: this.plusMinus,
              description: this.description,
              newAmount: amount
            });
            console.log(this.checkbooks);
            this.date = '';
            this.money = '';
            this.description = '';
          } else {
            this.itemError = true;
            this.itemErrorMessage = "Please enter a description";
          }
        } else {
          this.itemError = true;
          this.itemErrorMessage = "Please enter an amount of money that was deposited/withdrawal"
        }
      } else {
        this.itemError = true;
        this.itemErrorMessage = "Please indicate whether money should be subtracted or added"
      }
    } else {
      this.itemError = true;
      this.itemErrorMessage = "Please enter a date transaction was made"
    }


  }


}
