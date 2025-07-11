import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesHolderComponent } from './stories-holder.component';

describe('StoriesHolderComponent', () => {
  let component: StoriesHolderComponent;
  let fixture: ComponentFixture<StoriesHolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoriesHolderComponent]
    });
    fixture = TestBed.createComponent(StoriesHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
