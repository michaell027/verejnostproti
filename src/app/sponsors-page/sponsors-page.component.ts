import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sponsors-page',
  templateUrl: './sponsors-page.component.html',
  styleUrls: ['./sponsors-page.component.css'],
})
export class SponsorsPageComponent {
  kskData: Observable<{ logoPath: string; sponsorLink: string }>;

  constructor(translateService: TranslateService) {
    this.kskData = translateService.onLangChange.pipe(
      map((event) => {
        const lang = event.lang;
        return {
          logoPath:
            lang === 'en'
              ? 'assets/images/KSK_logo_eng_hor_ver.png'
              : 'assets/images/KSK_logo_hor_ver.png',
          sponsorLink:
            lang === 'en'
              ? 'https://web.vucke.sk/en/'
              : 'https://web.vucke.sk/sk/',
        };
      }),
    );
  }
}
