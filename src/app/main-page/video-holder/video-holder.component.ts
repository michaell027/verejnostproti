import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-video-holder',
  templateUrl: './video-holder.component.html',
  styleUrls: ['./video-holder.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    ButtonModule
  ]
})
export class VideoHolderComponent {
  redirect() {
    window.location.href = '/about';
  }
}
