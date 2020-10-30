import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsUpdateComponent } from './order-details-update.component';

describe('OrderDetailsUpdateComponent', () => {
  let component: OrderDetailsUpdateComponent;
  let fixture: ComponentFixture<OrderDetailsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
