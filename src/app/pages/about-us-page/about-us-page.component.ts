import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AboutUsHolderComponent } from './components/about-us-holder/about-us-holder.component';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.css'],
  standalone: true,
  imports: [CommonModule, TranslateModule, AboutUsHolderComponent],
})
export class AboutUsPageComponent {}
