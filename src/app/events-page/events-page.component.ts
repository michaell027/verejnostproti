import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsHeadingComponent } from './events-heading/events-heading.component';
import { WomensDayComponent } from './womens-day/womens-day.component';
import { SchoolLecturesComponent } from './school-lectures/school-lectures.component';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    EventsHeadingComponent,
    WomensDayComponent,
    SchoolLecturesComponent
  ]
})
export class EventsPageComponent {

}
