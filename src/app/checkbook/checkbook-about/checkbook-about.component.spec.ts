import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckbookAboutComponent } from './checkbook-about.component';

describe('CheckbookAboutComponent', () => {
  let component: CheckbookAboutComponent;
  let fixture: ComponentFixture<CheckbookAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckbookAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckbookAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
