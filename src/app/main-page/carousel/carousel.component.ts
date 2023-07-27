import {Component, OnInit} from '@angular/core';
import { TruncateTextPipe } from '../../truncate-text.pipe';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [TruncateTextPipe],
  animations: [
    trigger('slideAnimation', [
      transition('* => fadeIn', [
        style({ opacity: 0.8 }),
        animate('500ms ease', style({ opacity: 0.8, transform: 'translateX(0%)' })),
      ]),
      transition('* => fadeOut', [
        animate('500ms ease', style({ opacity: 0.8, transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class CarouselComponent{
  constructor() {}

  stories: { title: string; story: string }[] = [
    { title: 'Muži v električke', story: 'Minule idem so sestrou v električke cestou na hudobnú, a taky dvaja gadžovia si sadli oproti nám a: vy ste sestry? Ja: ticho\n' +
        'On: vy ste sestry? Idete zo školy?\n' +
        'Ja:mhm…\n' +
        'On: jezis ake ste zlaté malinke\n' +
        'Ja: stres panika ale ticho som bola\n' +
        'On: a koľko máte rokov?\n' +
        'Ona bude asi mladšia ako ty.\n' +
        'Pozrie sa na mňa už máš 18?\n' +
        'Našťastie išla moja zastávka. Ale sestra vystupuje o jednu neskôr… A už sme sa začali báť, tak som rýchlo sestru brala lebo som sa bala že sa niečo stane keď výstupim. Musela vystúpiť na mojej zastávke a som čakala s nou na druhú elektricku. Strašne som sa bála, nie o, seba ale o nu, že čo sa stane keď ju tam nechám.' },
    { title: 'Sused', story: 'My mame o dve brány ďalej suseda… A idem domov (to sa stalo viackrát) má presklenny balkón a on nahý tam stojí ( už ti asi dôjde čo robí) kuká po ženách na ulici jak ideme domov… Idem do obchodu stretnem ho na ulici a s takým nechutným pohľadom na mňa pozerá a to isté aj na iné ženy čo som ho videla proste na grc. A to som šla domov aj so sestrou párkrát a trz vysvetli jej čo tam tej chuj robí. Ja bývam na konci bloku čiže od zastávky musím prejsť celý blok, a on rovno v strede ma balkón a celú cestu az do mojej brány na mňa pozerá.' },
    { title: 'Biela dodávka', story: 'Keď som mala asi 12, išla som do školy. A pred školou stála biela dodávka, mala na sebe reklamu na niaky nábytok. A v nej sedel asi 40 ročný muž, ktorý v nej masturboval a volal ma cez otvorene okienko k sebe, že sa pohráme. Pamätám si, že som sa tak bála, že som utekala do školy a bála sa ísť poobede domov. Ešte veľmi dlho som sa bála chodiť do školy.' },
  ];

  currentAnimationState = '';


  currentIndex = 0;

  isCurrentImageBig = true;

  isCurrentImageOnLeft = false;

  isCurrentImageOnRight = false;

  get currentStories() {
    const lastIndex = this.stories.length - 1;
    let prevIndex = this.currentIndex - 1;
    let nextIndex = this.currentIndex + 1;

    if (prevIndex < 0) {
      prevIndex = lastIndex;
    }
    if (nextIndex > lastIndex) {
      nextIndex = 0;
    }

    return [
      { title: this.stories[prevIndex].title, isBig: false, story: this.stories[prevIndex].story },
      { title: this.stories[this.currentIndex].title, isBig: this.isCurrentImageBig, story: this.stories[this.currentIndex].story },
      { title: this.stories[nextIndex].title, isBig: false, story: this.stories[nextIndex].story }
    ];
  }

  moveLeft() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.stories.length - 1;
    }
    this.isCurrentImageBig = true;
    this.currentAnimationState = 'fadeIn';

  }

  moveRight() {
    this.currentIndex++;
    if (this.currentIndex > this.stories.length - 1) {
      this.currentIndex = 0;
    }
    this.isCurrentImageBig = true;
    this.currentAnimationState = 'fadeIn';
  }

}
