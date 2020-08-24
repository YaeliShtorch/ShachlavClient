import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPumpComponent } from './order-pump.component';

describe('OrderPumpComponent', () => {
  let component: OrderPumpComponent;
  let fixture: ComponentFixture<OrderPumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
