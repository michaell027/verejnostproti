import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensDay2024Component } from './womens-day-2024.component';

describe('WomensDay2024Component', () => {
  let component: WomensDay2024Component;
  let fixture: ComponentFixture<WomensDay2024Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomensDay2024Component],
    });
    fixture = TestBed.createComponent(WomensDay2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
