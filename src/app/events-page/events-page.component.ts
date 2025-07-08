import { Component } from '@angular/core';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css'],
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
