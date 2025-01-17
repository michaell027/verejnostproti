import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolLecturesComponent } from './school-lectures.component';

describe('SchoolLecturesComponent', () => {
  let component: SchoolLecturesComponent;
  let fixture: ComponentFixture<SchoolLecturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolLecturesComponent]
    });
    fixture = TestBed.createComponent(SchoolLecturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
