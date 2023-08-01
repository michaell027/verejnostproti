import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main-page/header/header.component';
import { MenubarModule } from 'primeng/menubar';
import {MainPageComponent} from "./main-page/main-page.component";
import { MainSectionComponent } from './main-page/main-section/main-section.component';
import { TopHeaderComponent } from './main-page/top-header/top-header.component';
import {ButtonModule} from "primeng/button";
import { ColumnsComponent } from './main-page/columns/columns.component';
import {DividerModule} from "primeng/divider";
import { AppRoutingModule } from './app-routing.module';
import { VideoHolderComponent } from './main-page/video-holder/video-holder.component';
import { GoalsComponent } from './main-page/goals/goals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CarouselModule} from "primeng/carousel";
import { TruncateTextPipe } from './truncate-text.pipe';
import {StoriesHolderComponent} from "./main-page/stories-holder/stories-holder.component";
import {CardModule} from "primeng/card";
import { MapHolderComponent } from './main-page/map-holder/map-holder.component';
import { GoogleMapsComponent } from './main-page/google-maps/google-maps.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { FooterComponent } from './main-page/footer/footer.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { AboutUsHolderComponent } from './about-us-page/about-us-holder/about-us-holder.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { InfoHolderComponent } from './contact-us-page/info-holder/info-holder.component';
import { ContactFormComponent } from './contact-us-page/contact-form/contact-form.component'
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";

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
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
