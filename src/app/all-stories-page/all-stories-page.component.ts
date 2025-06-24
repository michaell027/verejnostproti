import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TitleHolderComponent } from './title-holder/title-holder.component';
import { AllStoriesHolderComponent } from './all-stories-holder/all-stories-holder.component';

@Component({
  selector: 'app-all-stories-page',
  templateUrl: './all-stories-page.component.html',
  styleUrls: ['./all-stories-page.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    TitleHolderComponent,
    AllStoriesHolderComponent
  ]
})
export class AllStoriesPageComponent {

}
