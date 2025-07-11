import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsHeadingComponent } from './events-heading/events-heading.component';
import { SchoolLecturesComponent } from './school-lectures/school-lectures.component';
import { WomensDay2024Component } from './womens-day-2024/womens-day-2024.component';
import { WomensDay2025Component } from './womens-day-2025/womens-day-2025.component';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    EventsHeadingComponent,
    WomensDay2024Component,
    WomensDay2025Component,
    SchoolLecturesComponent,
  ],
})
export class EventsPageComponent {
  events = ['womans-day-2025', 'school-lectures', 'womans-day-2024'];
  currentIndex = 0;

  prevEvent() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextEvent() {
    if (this.currentIndex < this.events.length - 1) {
      this.currentIndex++;
    }
  }
}
