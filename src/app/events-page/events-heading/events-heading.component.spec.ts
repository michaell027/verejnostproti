import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsHeadingComponent } from './events-heading.component';

describe('EventsHeadingComponent', () => {
  let component: EventsHeadingComponent;
  let fixture: ComponentFixture<EventsHeadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsHeadingComponent]
    });
    fixture = TestBed.createComponent(EventsHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
