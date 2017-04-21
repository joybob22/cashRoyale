import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-page',
  templateUrl: './budget-page.component.html',
  styleUrls: ['./budget-page.component.scss']
})
export class BudgetPageComponent implements OnInit {
  budget = [{categoryName: 'groceries',
             items: [{category: 'groceries', purchase: 'milk', quantity: 1, price: '$2.75', notes: 'Need 4 more next week'},
                     {category: 'groceries', purchase: 'fruit', quantity: 4, price: '$1.75', notes: 'Need 2 more next week'},
                     {category: 'groceries', purchase: 'bread', quantity: 2, price: '$2.75', notes: 'Need 4 more next week'}],
             total: '$45.78'
            },
            {categoryName: 'auto',
              items: [{category: 'auto', purchase: 'oil change', quantity: 1, price: '$10.75', notes: 'Need one more next month'}],
              total: '$45.78'
            }
            ];
  constructor() {}

  ngOnInit() {
  }

}
