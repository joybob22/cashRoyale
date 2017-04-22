import { Component, OnInit} from '@angular/core';

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
  checkbookTitle = this.checkbooks[this.checkbookIndex].name;
  constructor() { }

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

  }

  deleteItem(index) {

  }

  ngOnInit() {

  }

}
