import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './main-page/footer/footer.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TranslateModule,
    HeaderComponent,
    FooterComponent,
    TopHeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'verejnostproti';

  constructor(private translateService: TranslateService) {
    const storedLang = localStorage.getItem('lang');
    if (storedLang) {
      this.translateService.use(storedLang);
    } else {
      this.setLanguage();
    }
  }

  private setLanguage() {
    const userLang = navigator.language || 'en';
    const lang = userLang.split('-')[0];
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
    localStorage.setItem('lang', lang);
  }
}
