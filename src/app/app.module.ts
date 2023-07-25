import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './main-page/header/header.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MyAuthGuard } from './my-auth.guard';
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

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    AboutPageComponent,
    MainSectionComponent,
    TopHeaderComponent,
    ColumnsComponent,
    VideoHolderComponent,
    GoalsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MenubarModule,
    ButtonModule,
    DividerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
