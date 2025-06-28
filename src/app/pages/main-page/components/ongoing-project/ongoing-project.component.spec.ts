import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingProjectComponent } from './ongoing-project.component';

describe('OngoingProjectComponent', () => {
  let component: OngoingProjectComponent;
  let fixture: ComponentFixture<OngoingProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OngoingProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OngoingProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
