import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css'],
  standalone: true,
  imports: [TranslateModule, ImageModule],
})
export class GoalsComponent {}
