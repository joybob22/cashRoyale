import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckbookService {

  constructor() { }

  private checkbooks = [
    {
      id: '1',
      name: 'Debit Card',
      currentBalance: 5000,
      startingBalance: 0,
      lastEdit: new Date(),
      icon: 'fa-money-check',
      items: [
        {
          date: '01/01/2011',
          money: 300,
          description: 'Found Money',
          newAmount: 1700
        },
        {
          date: '01/01/2011',
          money: -450,
          description: 'Bought Dog',
          newAmount: 1400
        },
        {
          date: '01/01/2011',
          money: 900,
          description: 'Got Paid',
          newAmount: 1850
        },
        {
          date: '01/01/2011',
          money: -50,
          description: 'Video Game',
          newAmount: 950
        },
        {
          date: '01/01/2011',
          money: -450,
          description: 'Fixed Car',
          newAmount: 1000
        }
      ]
    },
    {
      id: '2',
      name: 'Savings',
      currentBalance: 15000,
      startingBalance: 500,
      lastEdit: new Date(),
      icon: 'fa-money-bill-wave',
      items: [
        {
          date: '01/01/2011',
          money: 900,
          description: 'Got Paid',
          newAmount: 1850
        },
        {
          date: '01/01/2011',
          money: -50,
          description: 'Video Game',
          newAmount: 950
        },
        {
          date: '01/01/2011',
          money: 450,
          description: 'Fixed Car',
          newAmount: 1000
        }
      ]
    }
  ];


  getCheckbooks() {
    return this.checkbooks;
  }

  getCheckbook(id:string) {
    return this.checkbooks.filter(checkbook => checkbook.id === id )[0];
  }


}
