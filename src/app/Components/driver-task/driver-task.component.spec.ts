import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverTaskComponent } from './driver-task.component';

describe('DriverTaskComponent', () => {
  let component: DriverTaskComponent;
  let fixture: ComponentFixture<DriverTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
