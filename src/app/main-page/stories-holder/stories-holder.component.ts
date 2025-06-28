import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { Message } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { CardModule } from 'primeng/card';
import { TranslateModule } from '@ngx-translate/core';
import { TruncateTextPipe } from '../../pipes/truncate-text.pipe';

@Component({
  selector: 'app-stories-holder',
  templateUrl: './stories-holder.component.html',
  styleUrls: ['./stories-holder.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    MessagesModule,
    CardModule,
    TranslateModule,
    TruncateTextPipe,
  ],
})
export class StoriesHolderComponent implements OnInit {
  data: any[] = [];

  visible: boolean = false;

  formVisible: boolean = false;

  storyTitle: string = '';

  storyDescription: string = '';

  value: string | undefined;

  error: string = '';

  alert: boolean = false;

  constructor(private firebaseService: FirebaseService) {}

  messages1: Message[] = [
    {
      severity: 'success',
      summary: 'Pridané',
      detail: 'Ak admin overí váš príbeh, uvidíte ho u nás na stránke.',
    },
  ];

  ngOnInit() {
    this.firebaseService.getData('stories').subscribe((data) => {
      this.data = data;
      this.data = data
        .filter((story) => story.verified === 'true')
        .sort((a, b) => b.from - a.from);
      this.data = this.data.slice(0, 3);
    });
  }

  showDialog(title: string, description: string) {
    this.visible = true;
    this.storyTitle = title;
    this.storyDescription = description;
  }

  showForm() {
    this.storyTitle = '';
    this.storyDescription = '';
    this.formVisible = true;
  }

  addStory() {
    if (
      this.storyTitle === '' ||
      this.storyDescription === '' ||
      this.storyTitle === undefined ||
      this.storyDescription === undefined ||
      this.storyTitle.trim().length === 0 ||
      this.storyDescription.trim().length === 0
    ) {
      this.error = 'Please fill in all fields!';
      return;
    }
    this.firebaseService.addData('stories', {
      title: this.storyTitle,
      description: this.storyDescription,
      verified: false,
    });
    this.formVisible = false;
    this.alert = true;
  }

  protected readonly window = window;
}
