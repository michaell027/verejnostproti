import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoHolderComponent } from './info-holder.component';

describe('InfoHolderComponent', () => {
  let component: InfoHolderComponent;
  let fixture: ComponentFixture<InfoHolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoHolderComponent]
    });
    fixture = TestBed.createComponent(InfoHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
