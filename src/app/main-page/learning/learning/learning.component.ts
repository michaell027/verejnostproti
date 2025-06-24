import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    TranslateModule
  ]
})
export class LearningComponent {

}
