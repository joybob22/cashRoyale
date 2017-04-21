import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckbookPageComponent } from './checkbook-page.component';

describe('CheckbookPageComponent', () => {
  let component: CheckbookPageComponent;
  let fixture: ComponentFixture<CheckbookPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckbookPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckbookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
