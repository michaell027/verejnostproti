import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about-us-holder',
  templateUrl: './about-us-holder.component.html',
  styleUrls: ['./about-us-holder.component.css'],
  standalone: true,
  imports: [TranslateModule, NgOptimizedImage],
})
export class AboutUsHolderComponent {}
