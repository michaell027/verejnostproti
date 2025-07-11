import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { map, Observable } from 'rxjs';
import { GoogleMapsComponent } from '../../../../components/google-maps/google-maps.component';
import { KskLogoComponent } from '../../../../components/ksk-logo/ksk-logo.component';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    GoogleMapsComponent,
    KskLogoComponent,
    NgOptimizedImage,
  ],
})
export class ContactInfoComponent {}
