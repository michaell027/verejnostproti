import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MyAuthGuard } from './my-auth.guard';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { AllStoriesPageComponent } from './all-stories-page/all-stories-page.component';
import { SponsorsPageComponent } from './sponsors-page/sponsors-page.component';
import { EventsPageComponent } from './events-page/events-page.component';

const routes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: 'about', component: AboutUsPageComponent },
  { path: 'contact', component: ContactUsPageComponent },
  { path: 'stories', component: AllStoriesPageComponent },
  { path: 'sponsors', component: SponsorsPageComponent },
  { path: 'events', component: EventsPageComponent },

  { path: '**', component: MainPageComponent, canActivate: [MyAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
