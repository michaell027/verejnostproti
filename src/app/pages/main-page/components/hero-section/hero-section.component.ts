import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonDirective } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [ButtonDirective, TranslateModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {
  @Output() aboutUsClicked = new EventEmitter<void>();
  @Output() fourFunClicked = new EventEmitter<void>();
}
