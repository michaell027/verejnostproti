import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css'],
})
export class MainSectionComponent implements OnInit {
  ngOnInit(): void {}

  scrollToGoals() {
    const element = document.getElementById('goals');
    if (element) {
      const yOffset = -100;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  openAboutUsPage() {
    window.location.href = '/about';
  }

  open4FunPage() {
    window.open('https://4fund.com/jarmnb', '_blank');
  }
}
