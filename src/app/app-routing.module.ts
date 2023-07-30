import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MyAuthGuard } from './my-auth.guard';

const routes: Routes = [
  { path: 'homePage', component: MainPageComponent },
  { path: 'aboutPage', component: MainPageComponent },

  { path: '**', component: MainPageComponent, canActivate:[MyAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
