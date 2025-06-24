import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoHolderComponent } from './info-holder/info-holder.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    InfoHolderComponent,
    ContactFormComponent
  ]
})
export class ContactUsPageComponent {

}
