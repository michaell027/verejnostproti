import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  navItems = [
    { label: 'Sponzori', route: 'sponsorsPage' },
    { label: 'O nás', route: 'aboutPage' },
    { label: 'Kontaktujte nás', route: '/contactPage' },
  ];

  showMenu = false;
  scrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  closeMenu() {
    this.showMenu = false;
  }

  goHome() {
    // Implement navigation to the home page or desired route when clicking the logo
  }
}
