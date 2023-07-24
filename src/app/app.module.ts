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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: MainPageComponent },
  { path: 'protected', component: AboutPageComponent, canActivate: [MyAuthGuard] },
  //{ path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    AboutPageComponent,
    MainSectionComponent,
    TopHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MenubarModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
