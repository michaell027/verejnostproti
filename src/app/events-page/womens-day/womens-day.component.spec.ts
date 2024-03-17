import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensDayComponent } from './womens-day.component';

describe('WomensDayComponent', () => {
  let component: WomensDayComponent;
  let fixture: ComponentFixture<WomensDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomensDayComponent]
    });
    fixture = TestBed.createComponent(WomensDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
