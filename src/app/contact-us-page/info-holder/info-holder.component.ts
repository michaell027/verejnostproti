import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { GoogleMapsComponent } from '../../main-page/google-maps/google-maps.component';

@Component({
  selector: 'app-info-holder',
  templateUrl: './info-holder.component.html',
  styleUrls: ['./info-holder.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    GoogleMapsComponent
  ]
})
export class InfoHolderComponent {

}
