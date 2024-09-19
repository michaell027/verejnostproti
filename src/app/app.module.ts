import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main-page/header/header.component';
import { MenubarModule } from 'primeng/menubar';
import { MainPageComponent } from './main-page/main-page.component';
import { MainSectionComponent } from './main-page/main-section/main-section.component';
import { TopHeaderComponent } from './main-page/top-header/top-header.component';
import { ButtonModule } from 'primeng/button';
import { ColumnsComponent } from './main-page/columns/columns.component';
import { DividerModule } from 'primeng/divider';
import { AppRoutingModule } from './app-routing.module';
import { VideoHolderComponent } from './main-page/video-holder/video-holder.component';
import { GoalsComponent } from './main-page/goals/goals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel';
import { TruncateTextPipe } from './truncate-text.pipe';
import { StoriesHolderComponent } from './main-page/stories-holder/stories-holder.component';
import { CardModule } from 'primeng/card';
import { MapHolderComponent } from './main-page/map-holder/map-holder.component';
import { GoogleMapsComponent } from './main-page/google-maps/google-maps.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { FooterComponent } from './main-page/footer/footer.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { AboutUsHolderComponent } from './about-us-page/about-us-holder/about-us-holder.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { InfoHolderComponent } from './contact-us-page/info-holder/info-holder.component';
import { ContactFormComponent } from './contact-us-page/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {
  FirestoreModule,
  getFirestore,
  provideFirestore,
} from '@angular/fire/firestore';
import { firebaseConfig } from '../environments/firebase-config';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AllStoriesPageComponent } from './all-stories-page/all-stories-page.component';
import { AllStoriesHolderComponent } from './all-stories-page/all-stories-holder/all-stories-holder.component';
import { PaginatorModule } from 'primeng/paginator';
import { TitleHolderComponent } from './all-stories-page/title-holder/title-holder.component';
import { DialogModule } from 'primeng/dialog';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { SponsorsPageComponent } from './sponsors-page/sponsors-page.component';
import { CampaignComponent } from './main-page/campaign/campaign.component';
import { ReportageHolderComponent } from './main-page/reportage-holder/reportage-holder.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { EventsHeadingComponent } from './events-page/events-heading/events-heading.component';
import { WomensDayComponent } from './events-page/womens-day/womens-day.component';
import { NgOptimizedImage } from '@angular/common';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LearningComponent } from './main-page/learning/learning/learning.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    MainSectionComponent,
    TopHeaderComponent,
    ColumnsComponent,
    VideoHolderComponent,
    GoalsComponent,
    TruncateTextPipe,
    StoriesHolderComponent,
    MapHolderComponent,
    GoogleMapsComponent,
    FooterComponent,
    AboutUsPageComponent,
    AboutUsHolderComponent,
    ContactUsPageComponent,
    InfoHolderComponent,
    ContactFormComponent,
    AllStoriesPageComponent,
    AllStoriesHolderComponent,
    TitleHolderComponent,
    AdminPageComponent,
    SponsorsPageComponent,
    CampaignComponent,
    ReportageHolderComponent,
    EventsPageComponent,
    EventsHeadingComponent,
    WomensDayComponent,
    LearningComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MenubarModule,
    ButtonModule,
    DividerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    CardModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    InputTextModule,
    FirestoreModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    PaginatorModule,
    DialogModule,
    InputTextareaModule,
    MessagesModule,
    NgOptimizedImage,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
