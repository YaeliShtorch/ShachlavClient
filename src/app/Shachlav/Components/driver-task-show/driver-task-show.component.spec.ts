import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverTaskShowComponent } from './driver-task-show.component';

describe('DriverTaskShowComponent', () => {
  let component: DriverTaskShowComponent;
  let fixture: ComponentFixture<DriverTaskShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverTaskShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverTaskShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
