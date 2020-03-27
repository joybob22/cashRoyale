import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckbookNavComponent } from './checkbook-nav.component';

describe('CheckbookNavComponent', () => {
  let component: CheckbookNavComponent;
  let fixture: ComponentFixture<CheckbookNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckbookNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckbookNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
