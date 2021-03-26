import { Component, OnInit} from '@angular/core';
import {DatabaseService} from "../../angular-fire/database.service";
import {AuthService} from "../../angular-fire/auth-service.service";
import { ActivatedRoute } from '@angular/router';
import { CheckbookService } from '../checkbook.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkbook-page',
  templateUrl: './checkbook-page.component.html',
  styleUrls: ['./checkbook-page.component.scss']
})
export class CheckbookPageComponent implements OnInit {

  checkbook;
  createTransactionForm: FormGroup;
  constructor(
    authService: AuthService, 
    private _route: ActivatedRoute, 
    private checkbookService: CheckbookService,
    private fb: FormBuilder,
    ) {

  }

  ngOnInit() {
    this.checkbook = this.checkbookService.getCheckbook(Number(this._route.snapshot.params['id']));
    this.createTransactionForm = this.fb.group({
      money: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      newAmount: ['', Validators.required]
    })
  }


}
