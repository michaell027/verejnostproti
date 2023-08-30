import { Component } from '@angular/core';

@Component({
  selector: 'app-video-holder',
  templateUrl: './video-holder.component.html',
  styleUrls: ['./video-holder.component.css']
})
export class VideoHolderComponent {

  redirect() {
    window.location.href = '/aboutPage';
  }
}
