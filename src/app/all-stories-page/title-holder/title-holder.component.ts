import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllStoriesHolderComponent } from '../all-stories-holder/all-stories-holder.component';

@Component({
  selector: 'app-title-holder',
  templateUrl: './title-holder.component.html',
  styleUrls: ['./title-holder.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    AllStoriesHolderComponent
  ]
})
export class TitleHolderComponent {

}
