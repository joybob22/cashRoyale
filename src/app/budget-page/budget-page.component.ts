import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-page',
  templateUrl: './budget-page.component.html',
  styleUrls: ['./budget-page.component.scss']
})
export class BudgetPageComponent implements OnInit {
  inputCategoryValue: string;

  inputPurchaseValue: string;
  inputQuantityValue: number;
  inputPriceValue: string;
  inputNotesValue: string;

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

  // budget = [{category: 'grocery', purchase: 'milk', quantity: 1, notes: }];

  constructor() {}
  addCategory(event): void {
    if (this.inputCategoryValue !== '' && this.inputCategoryValue !== null && this.inputCategoryValue !== undefined) {
      console.log(this.inputCategoryValue);
      console.log(event.keyCode);
      if (event.keyCode === 13) {
        this.budget.push({categoryName: this.inputCategoryValue, items: [], total: '$0.00'});
        this.inputCategoryValue = '';
      }
    }
  }
  addCategoryMouse(): void {
    if (this.inputCategoryValue !== '' && this.inputCategoryValue !== null && this.inputCategoryValue !== undefined) {
      this.budget.push({categoryName: this.inputCategoryValue, items: [], total: '$0.00'});
      this.inputCategoryValue = '';
    }
  }
  deleteCategory(index): void {
    this.budget.splice(index, 1);
  }
  addItem(parentIndex, event): void {
    if (this.inputPurchaseValue !== undefined && this.inputQuantityValue !== undefined &&
      this.inputPriceValue !== undefined && this.inputNotesValue !== undefined) {
      if (this.inputPurchaseValue !== '' && this.inputQuantityValue > 0 &&
        this.inputPriceValue !== '' && this.inputNotesValue !== '') {
        if (this.inputPurchaseValue !== null && this.inputQuantityValue !== null &&
          this.inputPriceValue !== null && this.inputNotesValue !== null) {
          if (event.keyCode === 13) {
            this.budget[parentIndex].items.push({
              category: this.budget[parentIndex].categoryName, purchase: this.inputPurchaseValue,
              quantity: this.inputQuantityValue, price: this.inputPriceValue, notes: this.inputNotesValue
            });
            this.inputPurchaseValue = '';
            this.inputQuantityValue = null;
            this.inputPriceValue = '';
            this.inputNotesValue = '';
          }
        }
      }
    }
  }
  addItemMouse(parentIndex): void {
    if (this.inputPurchaseValue !== undefined && this.inputQuantityValue !== undefined &&
      this.inputPriceValue !== undefined && this.inputNotesValue !== undefined) {
      if (this.inputPurchaseValue !== '' && this.inputQuantityValue > 0 &&
        this.inputPriceValue !== '' && this.inputNotesValue !== '') {
        if (this.inputPurchaseValue !== null && this.inputQuantityValue !== null &&
          this.inputPriceValue !== null && this.inputNotesValue !== null) {
          this.budget[parentIndex].items.push({
            category: this.budget[parentIndex].categoryName, purchase: this.inputPurchaseValue,
            quantity: this.inputQuantityValue, price: this.inputPriceValue, notes: this.inputNotesValue
          });
          this.inputPurchaseValue = '';
          this.inputQuantityValue = null;
          this.inputPriceValue = '';
          this.inputNotesValue = '';
        }
      }
    }
  }
  deleteItem(parentIndex, index): void {
    this.budget[parentIndex].items.splice(index, 1);
  }

  ngOnInit() {
  }

}
