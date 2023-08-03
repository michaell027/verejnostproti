import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleHolderComponent } from './title-holder.component';

describe('TitleHolderComponent', () => {
  let component: TitleHolderComponent;
  let fixture: ComponentFixture<TitleHolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleHolderComponent]
    });
    fixture = TestBed.createComponent(TitleHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
