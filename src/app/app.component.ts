import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
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
