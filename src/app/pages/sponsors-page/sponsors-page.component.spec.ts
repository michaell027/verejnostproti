import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsPageComponent } from './sponsors-page.component';

describe('SponsorsPageComponent', () => {
  let component: SponsorsPageComponent;
  let fixture: ComponentFixture<SponsorsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SponsorsPageComponent]
    });
    fixture = TestBed.createComponent(SponsorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
