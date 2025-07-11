import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-reportage-holder',
  templateUrl: './reportage-holder.component.html',
  styleUrls: ['./reportage-holder.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    TranslateModule
  ]
})
export class ReportageHolderComponent {
  redirect() {
    window.location.href = 'events';
  }
}
