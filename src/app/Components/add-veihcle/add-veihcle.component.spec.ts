import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVeihcleComponent } from './add-veihcle.component';

describe('AddVeihcleComponent', () => {
  let component: AddVeihcleComponent;
  let fixture: ComponentFixture<AddVeihcleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVeihcleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVeihcleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
