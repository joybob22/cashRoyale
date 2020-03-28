import { Component, OnInit } from '@angular/core';
import { CheckbookService } from '../checkbook.service';

@Component({
  selector: 'app-checkbook-dashboard',
  templateUrl: './checkbook-dashboard.component.html',
  styleUrls: ['./checkbook-dashboard.component.scss']
})
export class CheckbookDashboardComponent implements OnInit {

  checkbooks;

  constructor(private checkbookService: CheckbookService) {
    this.checkbooks = this.checkbookService.getCheckbooks();
  }

  ngOnInit(): void {
  }

}
