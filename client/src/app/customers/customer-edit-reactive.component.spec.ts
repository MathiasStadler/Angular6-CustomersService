import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEditReactiveComponent } from './customer-edit-reactive.component';

describe('CustomerEditReactiveComponent', () => {
  let component: CustomerEditReactiveComponent;
  let fixture: ComponentFixture<CustomerEditReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerEditReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerEditReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
