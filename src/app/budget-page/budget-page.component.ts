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
  inputPriceValue: any;
  inputNotesValue: string;

  total: any;
  categoryTotal: any;

  budget = [{categoryName: 'groceries',
             items: [{category: 'groceries', purchase: 'milk', quantity: 1, price: '$2.75', total: '$2.75', notes: 'Need 4 more next week'},
                     {category: 'groceries', purchase: 'fruit', quantity: 4, price: '$1.75', total: '$7.00', notes: 'Need 2 more next week'},
                     {category: 'groceries', purchase: 'bread', quantity: 2, price: '$2.75', total: '$4.50', notes: 'Need 4 more next week'}],
             total: this.categoryTotal
            },
            {categoryName: 'auto',
              items: [{category: 'auto', purchase: 'oil change', quantity: 1, price: '$10.75', total: '$10.75', notes: 'Need one more'}],
              total: this.categoryTotal
            }
            ];

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
            this.calcItemTotal();
            // this.calcCategoryTotal(parentIndex);
            this.budget[parentIndex].items.push({
              category: this.budget[parentIndex].categoryName, purchase: this.inputPurchaseValue,
              quantity: this.inputQuantityValue, price: this.inputPriceValue, total: this.total, notes: this.inputNotesValue
            });
            this.resetValue();
          }
        }
      }
    }
  }
  // calcCategoryTotal(parentIndex): void {
  //   for (let i = 0, l = this.budget[parentIndex].items.length; i < l; i ++) {
  //     this.budget[parentIndex].items[i].total = this.budget[parentIndex].items[i].total.slice(1);
  //     let rest: any = this.budget[parentIndex].items[i].total;
  //     rest = Number(rest);
  //     console.log(this.budget[parentIndex].items[i].total);
  //     this.categoryTotal += rest;
  //     console.log(this.categoryTotal);
  //   }
  // }
  addItemMouse(parentIndex): void {
    if (this.inputPurchaseValue !== undefined && this.inputQuantityValue !== undefined &&
      this.inputPriceValue !== undefined && this.inputNotesValue !== undefined) {
      if (this.inputPurchaseValue !== '' && this.inputQuantityValue > 0 &&
        this.inputPriceValue !== '' && this.inputNotesValue !== '') {
        if (this.inputPurchaseValue !== null && this.inputQuantityValue !== null &&
          this.inputPriceValue !== null && this.inputNotesValue !== null) {
          this.calcItemTotal();
          this.budget[parentIndex].items.push({
            category: this.budget[parentIndex].categoryName, purchase: this.inputPurchaseValue,
            quantity: this.inputQuantityValue, price: this.inputPriceValue, total: this.total, notes: this.inputNotesValue
          });
          this.resetValue();
        }
      }
    }
  }
  deleteItem(parentIndex, index): void {
    this.budget[parentIndex].items.splice(index, 1);
  }
  calcItemTotal(): void {
    if (!isNaN(this.inputQuantityValue)) {
      this.inputPriceValue = this.inputPriceValue.slice(1);
      this.inputPriceValue = Number(this.inputPriceValue);
      this.total = this.inputPriceValue * this.inputQuantityValue;
      this.inputPriceValue = Math.round(this.inputPriceValue * 100) / 100;
      this.inputPriceValue = '$' + this.inputPriceValue;
      if (this.inputPriceValue.length === 4) {
        this.inputPriceValue = this.inputPriceValue + '0';
      }
      this.total = Math.round(this.total * 100) / 100;
      this.total = '$' + this.total;
      if (this.total.length ===  4) {
        this.total = this.total + '0';
      }
    }
  }
  resetValue(): void {
    this.inputPurchaseValue = '';
    this.inputQuantityValue = null;
    this.inputPriceValue = '';
    this.inputNotesValue = '';
  }

  ngOnInit() {
  }

}
