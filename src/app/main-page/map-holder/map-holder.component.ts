import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-map-holder',
  templateUrl: './map-holder.component.html',
  styleUrls: ['./map-holder.component.css'],
})
export class MapHolderComponent {
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
