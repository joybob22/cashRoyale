import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCheckbookComponent } from './add-checkbook.component';

describe('AddCheckbookComponent', () => {
  let component: AddCheckbookComponent;
  let fixture: ComponentFixture<AddCheckbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCheckbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCheckbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
