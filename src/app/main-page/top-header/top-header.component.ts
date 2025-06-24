import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class TopHeaderComponent implements OnInit {
  currentLang: string;
  constructor(private translateService: TranslateService) {
    this.currentLang = translateService.currentLang;
  }

  ngOnInit(): void {}

  changeLang(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem('lang', lang);
    this.currentLang = lang;
  }

  protected readonly navigator = navigator;
}
