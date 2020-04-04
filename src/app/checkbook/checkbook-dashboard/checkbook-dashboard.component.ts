import { Component, OnInit } from '@angular/core';
import { CheckbookService } from '../checkbook.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ValidateIsNumber } from 'app/validators/isNumber.validator';


@Component({
  selector: 'app-checkbook-dashboard',
  templateUrl: './checkbook-dashboard.component.html',
  styleUrls: ['./checkbook-dashboard.component.scss'],
  animations: [
    trigger(
      'slideDown', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0 }),
            animate('0.5s ease-out', 
                    style({ height: '250px' }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: '250px' }),
            animate('0.5s ease-in', 
                    style({ height: 0 }))
          ]
        )
      ]
    )
  ]
})
export class CheckbookDashboardComponent implements OnInit {
  checkbooks;
  toggleCreate = true;
  form: FormGroup;

  constructor(private checkbookService: CheckbookService, private fb: FormBuilder) {
    this.checkbooks = this.checkbookService.getCheckbooks();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      balance: ['', [Validators.required, ValidateIsNumber]],
      icon: ['', Validators.required]
    })
  }

  addNewToggle(): void {
    this.toggleCreate = !this.toggleCreate;
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if(this.form.status === "VALID") {
      //do stuff
      this.checkbooks = this.checkbookService.createCheckbook(this.form.value);
      this.form.reset();
      this.toggleCreate = true;
    }
  }

}
