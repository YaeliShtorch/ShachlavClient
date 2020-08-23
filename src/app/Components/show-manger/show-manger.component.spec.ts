import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMangerComponent } from './show-manger.component';

describe('ShowMangerComponent', () => {
  let component: ShowMangerComponent;
  let fixture: ComponentFixture<ShowMangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
