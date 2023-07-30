import {Component, HostListener, OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  navItems = [
    { label: 'O nás', route: 'aboutPage' },
    { label: 'Kontaktujte nás', route: '/contact' }
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
