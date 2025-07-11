import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-ongoing-project',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    TranslateModule,
    NgOptimizedImage,
    ImageModule,
  ],
  templateUrl: './ongoing-project.component.html',
  styleUrls: ['./ongoing-project.component.css'],
})
export class OngoingProjectComponent {}
