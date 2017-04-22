import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-checkbook-page',
  templateUrl: './checkbook-page.component.html',
  styleUrls: ['./checkbook-page.component.scss']
})
export class CheckbookPageComponent implements OnInit {

  checkbookData = [
    {
      date: '01/01/2011',
      money: '+ 300',
      description: 'Found Money',
      newAmount: 1700
    },
    {
      date: '01/01/2011',
      money: '- 450',
      description: 'Bought Dog',
      newAmount: 1400
    },
    {
      date: '01/01/2011',
      money: '+ 900',
      description: 'Got Paid',
      newAmount: 1850
    },
    {
      date: '01/01/2011',
      money: '- 50',
      description: 'Video Game',
      newAmount: 950
    },
    {
      date: '01/01/2011',
      money: '- 450',
      description: 'Fixed Car',
      newAmount: 1000
    }
  ];

  checkbooks = ['Bank of America', 'Spending', 'Savings', 'Zions', 'Vacation'];

  constructor() { }

  menuState:boolean = false;

  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === false ? true : false;
  }

  ngOnInit() {

  }

}
