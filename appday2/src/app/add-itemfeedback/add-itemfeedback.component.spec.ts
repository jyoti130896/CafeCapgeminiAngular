import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemfeedbackComponent } from './add-itemfeedback.component';

describe('AddItemfeedbackComponent', () => {
  let component: AddItemfeedbackComponent;
  let fixture: ComponentFixture<AddItemfeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemfeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
