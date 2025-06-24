import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { VideoHolderComponent } from './video-holder/video-holder.component';
import { GoalsComponent } from './goals/goals.component';
import { ColumnsComponent } from './columns/columns.component';
import { StoriesHolderComponent } from './stories-holder/stories-holder.component';
import { MapHolderComponent } from './map-holder/map-holder.component';
import { ReportageHolderComponent } from './reportage-holder/reportage-holder.component';
import { CampaignComponent } from './campaign/campaign.component';
import { LearningComponent } from './learning/learning/learning.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    TopHeaderComponent,
    MainSectionComponent,
    VideoHolderComponent,
    GoalsComponent,
    ColumnsComponent,
    StoriesHolderComponent,
    MapHolderComponent,
    ReportageHolderComponent,
    CampaignComponent,
    LearningComponent
  ]
})
export class MainPageComponent {
}
