import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { AllStoriesPageComponent } from './all-stories-page/all-stories-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { SponsorsPageComponent } from './sponsors-page/sponsors-page.component';
import { EventsPageComponent } from './events-page/events-page.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'about', component: AboutUsPageComponent },
  { path: 'contact', component: ContactUsPageComponent },
  { path: 'stories', component: AllStoriesPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'sponsors', component: SponsorsPageComponent },
  { path: 'events', component: EventsPageComponent },
  { path: '**', redirectTo: '' }
];
