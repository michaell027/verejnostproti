import { Component } from '@angular/core';

@Component({
  selector: 'app-reportage-holder',
  templateUrl: './reportage-holder.component.html',
  styleUrls: ['./reportage-holder.component.css'],
})
export class ReportageHolderComponent {
  redirect() {
    window.location.href = 'events';
  }
}
