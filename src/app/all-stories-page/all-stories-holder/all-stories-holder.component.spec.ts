import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStoriesHolderComponent } from './all-stories-holder.component';

describe('AllStoriesHolderComponent', () => {
  let component: AllStoriesHolderComponent;
  let fixture: ComponentFixture<AllStoriesHolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllStoriesHolderComponent]
    });
    fixture = TestBed.createComponent(AllStoriesHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
