import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBreakdownComponent } from './view-breakdown.component';

describe('ViewBreakdownComponent', () => {
  let component: ViewBreakdownComponent;
  let fixture: ComponentFixture<ViewBreakdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBreakdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
