import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MyAuthGuard } from './my-auth.guard';
import {AboutUsPageComponent} from "./about-us-page/about-us-page.component";
import {ContactUsPageComponent} from "./contact-us-page/contact-us-page.component";

const routes: Routes = [
  { path: 'homePage', component: MainPageComponent },
  { path: 'aboutPage', component: AboutUsPageComponent },
  { path: "contactPage", component: ContactUsPageComponent },

  { path: '**', component: MainPageComponent, canActivate:[MyAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
