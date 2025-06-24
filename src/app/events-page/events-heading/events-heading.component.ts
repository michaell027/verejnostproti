import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-events-heading',
  templateUrl: './events-heading.component.html',
  styleUrls: ['./events-heading.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class EventsHeadingComponent {

}
