import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-dashboard-page',
  templateUrl: './default-dashboard-page.component.html',
  styleUrls: ['./default-dashboard-page.css']
})
export class DefaultDashboardPageComponent implements OnInit {

  options: Object;

  constructor() {
    this.options = {
      title : { text : 'Chart of All Charts' },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2],
      }]
    };
  }


  ngOnInit() {}

}
