import { Component, OnInit } from '@angular/core';

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
  checkbookIndex = 0;
  plusMinus;
  plusMinusInfo = ['-', '+'];

  constructor() { }

  checkbooks = [
    {
      name: 'Vacation',
      items: [

        {
          date: '01/01/2011',
          money: '300',
          description: 'Found Money',
          newAmount: 1700
        },
        {
          date: '01/01/2011',
          money: '450',
          description: 'Bought Dog',
          newAmount: 1400
        },
        {
          date: '01/01/2011',
          money: '900',
          description: 'Got Paid',
          newAmount: 1850
        },
        {
          date: '01/01/2011',
          money: '50',
          description: 'Video Game',
          newAmount: 950
        },
        {
          date: '01/01/2011',
          money: '450',
          description: 'Fixed Car',
          newAmount: 1000
        }
      ]
    }
  ];

  ngOnInit() {
  }

  addNewCheckbook() {
    this.checkbooks.push({
      name: this.checkbookName,
      items: []
    });
    console.log(this.checkbooks);
    this.checkbookName = "";
  }

  addNewItem() {
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
      description: this.description,
      newAmount: amount
    });
    console.log(this.checkbooks);
    this.date = '';
    this.money = '';
    this.description = '';
  }


}
