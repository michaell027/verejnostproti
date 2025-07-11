import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { AsyncPipe, NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-ksk-logo',
  standalone: true,
  imports: [AsyncPipe, NgIf, NgOptimizedImage],
  templateUrl: './ksk-logo.component.html',
  styleUrl: './ksk-logo.component.css',
})
export class KskLogoComponent {
  kskData: Observable<{ logoPath: string; sponsorLink: string }>;

  constructor(translateService: TranslateService) {
    this.kskData = translateService.onLangChange.pipe(
      map((event) => {
        const lang = event.lang;
        return {
          logoPath:
            lang === 'en'
              ? 'assets/images/logos/KSK_logo_eng_hor_ver.webp'
              : 'assets/images/logos/KSK_logo_hor_ver.webp',
          sponsorLink:
            lang === 'en'
              ? 'https://web.vucke.sk/en/'
              : 'https://web.vucke.sk/sk/',
        };
      }),
    );
  }
}
