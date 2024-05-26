import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  navItems = [
    { label: 'homePage.header.menu.about', route: 'about' },
    { label: 'homePage.header.menu.sponsors', route: 'sponsors' },
    { label: 'homePage.header.menu.events', route: 'events' },
    { label: 'homePage.header.menu.contact', route: 'contact' },
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
