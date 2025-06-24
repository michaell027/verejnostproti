import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { TruncateTextPipe } from '../../truncate-text.pipe';
import { FirebaseService } from '../../firebase.service';

@Component({
  selector: 'app-all-stories-holder',
  templateUrl: './all-stories-holder.component.html',
  styleUrls: ['./all-stories-holder.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    PaginatorModule,
    ButtonModule,
    TruncateTextPipe
  ]
})
export class AllStoriesHolderComponent {
  data: any[] = [];
  currentPage = 0;
  storiesPerPage = 1;
  visible: boolean = false;
  isSmallScreen = false;
  isMiniScreen = false;
  isMobileScreen = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  constructor(private firebaseService: FirebaseService) {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.loadData();
  }

  showDialog() {
    this.visible = true;
  }

  loadData() {
    this.firebaseService.getData('stories').subscribe((data: any[]) => {
      this.data = data.filter(story => story.verified === "true").sort((a, b) => b.from - a.from);
    });
  }

  private checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 520 && window.innerWidth > 360;
    this.isMiniScreen = window.innerWidth <= 360;
  }


  getCurrentPageData(): any[] {
    const start = this.currentPage * this.storiesPerPage;
    return this.data.slice(start, start + this.storiesPerPage);
  }

  onPageChange(event: any) {
    this.currentPage = event.page;
  }
}
