import {Component, OnInit} from '@angular/core';
import {FirebaseService} from "../../firebase.service";
import { TruncateTextPipe } from '../../truncate-text.pipe';


@Component({
  selector: 'app-stories-holder',
  templateUrl: './stories-holder.component.html',
  styleUrls: ['./stories-holder.component.css'],
  providers: [TruncateTextPipe]
})
export class StoriesHolderComponent implements OnInit{

  data: any[] = [];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getData('stories').subscribe(data => {
      this.data = data;
      this.data.sort((a, b) => b.from - a.from);
      this.data = this.data.slice(0, 3);
    });
  }

  protected readonly window = window;
}

