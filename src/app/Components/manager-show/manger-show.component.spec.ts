import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangerShowComponent} from './manager-show.component';

describe('ShowMangerComponent', () => {
  let component: MangerShowComponent;
  let fixture: ComponentFixture<MangerShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangerShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangerShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
