import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportageHolderComponent } from './reportage-holder.component';

describe('ReportageHolderComponent', () => {
  let component: ReportageHolderComponent;
  let fixture: ComponentFixture<ReportageHolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportageHolderComponent]
    });
    fixture = TestBed.createComponent(ReportageHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
