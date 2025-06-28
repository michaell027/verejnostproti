import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-ongoing-project',
  standalone: true,
  imports: [CommonModule, ButtonModule, TranslateModule, NgOptimizedImage],
  templateUrl: './ongoing-project.component.html',
  styleUrls: ['./ongoing-project.component.css'],
})
export class OngoingProjectComponent {}
