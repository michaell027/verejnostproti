import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { KskLogoComponent } from '../../components/ksk-logo/ksk-logo.component';

@Component({
  selector: 'app-sponsors-page',
  templateUrl: './sponsors-page.component.html',
  styleUrls: ['./sponsors-page.component.css'],
  standalone: true,
  imports: [TranslateModule, KskLogoComponent],
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
              ? 'assets/images/KSK_logo_eng_hor_ver.webp'
              : 'assets/images/KSK_logo_hor_ver.webp',
          sponsorLink:
            lang === 'en'
              ? 'https://web.vucke.sk/en/'
              : 'https://web.vucke.sk/sk/',
        };
      }),
    );
  }
}
