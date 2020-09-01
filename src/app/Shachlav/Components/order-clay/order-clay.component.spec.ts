import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderClayComponent } from './order-clay.component';

describe('OrderClayComponent', () => {
  let component: OrderClayComponent;
  let fixture: ComponentFixture<OrderClayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderClayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderClayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
