import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConcreteComponent } from './order-concrete.component';

describe('OrderConcreteComponent', () => {
  let component: OrderConcreteComponent;
  let fixture: ComponentFixture<OrderConcreteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderConcreteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderConcreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
