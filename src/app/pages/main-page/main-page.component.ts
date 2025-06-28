import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoHolderComponent } from '../../main-page/video-holder/video-holder.component';
import { GoalsComponent } from '../../main-page/goals/goals.component';
import { ColumnsComponent } from './components/columns/columns.component';
import { StoriesHolderComponent } from '../../main-page/stories-holder/stories-holder.component';
import { MapHolderComponent } from '../../main-page/map-holder/map-holder.component';
import { ReportageHolderComponent } from '../../main-page/reportage-holder/reportage-holder.component';
import { CampaignComponent } from './components/campaign/campaign.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { OngoingProjectComponent } from './components/ongoing-project/ongoing-project.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    VideoHolderComponent,
    GoalsComponent,
    ColumnsComponent,
    StoriesHolderComponent,
    MapHolderComponent,
    ReportageHolderComponent,
    CampaignComponent,
    HeroSectionComponent,
    OngoingProjectComponent,
  ],
})
export class MainPageComponent {
  openAboutUsPage() {
    window.location.href = '/about';
  }

  open4FunPage() {
    window.open('https://4fund.com/jarmnb', '_blank');
  }

  scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  openContactUsPage() {
    window.location.href = 'contact';
  }
}
