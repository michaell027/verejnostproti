import { Component } from '@angular/core';
import {FirebaseService} from "../../firebase.service";
import {TruncateTextPipe} from "../../truncate-text.pipe";


@Component({
  selector: 'app-all-stories-holder',
  templateUrl: './all-stories-holder.component.html',
  styleUrls: ['./all-stories-holder.component.css'],
  providers: [TruncateTextPipe]
})
export class AllStoriesHolderComponent {
  data: any[] = [];
  currentPage = 0;
  storiesPerPage = 1;
  visible: boolean = false;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.loadData();
  }

  showDialog() {
    this.visible = true;
  }

  loadData() {
    this.firebaseService.getData('stories').subscribe((data: any[]) => {
      this.data = data.sort((a, b) => b.from - a.from);
    });
  }

  getCurrentPageData(): any[] {
    const start = this.currentPage * this.storiesPerPage;
    return this.data.slice(start, start + this.storiesPerPage);
  }

  onPageChange(event: any) {
    this.currentPage = event.page;
  }
}
