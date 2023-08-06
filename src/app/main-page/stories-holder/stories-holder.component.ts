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

  visible: boolean = false;

  formVisible: boolean = false;

  storyTitle : string = "";

  storyDescription : string = "";

  value: string | undefined;

  error: string = "";

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getData('stories').subscribe(data => {
      this.data = data;
      this.data = data.filter(story => story.verified === "true").sort((a, b) => b.from - a.from);
      this.data = this.data.slice(0, 3);
    });
  }

  showDialog( title : string, description : string) {
    this.visible = true;
    this.storyTitle = title;
    this.storyDescription = description;
  }

  showForm() {
    this.formVisible = true;
  }

  addStory() {
    if (this.storyTitle === "" || this.storyDescription === "" || this.storyTitle === undefined || this.storyDescription === undefined || this.storyTitle.trim().length === 0 || this.storyDescription.trim().length === 0) {
      this.error = "Please fill in all fields!";
      return;
    }
    this.firebaseService.addData('stories', {
      title: this.storyTitle,
      description: this.storyDescription,
      verified: false, // Automatically set 'verified' to false
    });
    this.formVisible = false;
  }


  protected readonly window = window;
}

