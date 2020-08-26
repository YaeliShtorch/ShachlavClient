import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTypeOrderComponent } from './material-type-order.component';

describe('MaterialTypeOrderComponent', () => {
  let component: MaterialTypeOrderComponent;
  let fixture: ComponentFixture<MaterialTypeOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialTypeOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTypeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
