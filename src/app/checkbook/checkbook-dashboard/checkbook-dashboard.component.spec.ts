import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckbookDashboardComponent } from './checkbook-dashboard.component';

describe('CheckbookDashboardComponent', () => {
  let component: CheckbookDashboardComponent;
  let fixture: ComponentFixture<CheckbookDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckbookDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckbookDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
