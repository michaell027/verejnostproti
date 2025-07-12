import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsHolderComponent } from './about-us-holder.component';

describe('AboutUsHolderComponent', () => {
  let component: AboutUsHolderComponent;
  let fixture: ComponentFixture<AboutUsHolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsHolderComponent]
    });
    fixture = TestBed.createComponent(AboutUsHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
