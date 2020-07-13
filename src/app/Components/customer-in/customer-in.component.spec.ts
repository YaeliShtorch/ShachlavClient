import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInComponent } from './customer-in.component';

describe('CustomerInComponent', () => {
  let component: CustomerInComponent;
  let fixture: ComponentFixture<CustomerInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
