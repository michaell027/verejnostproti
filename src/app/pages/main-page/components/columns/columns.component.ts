import { Component, Output, EventEmitter } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.css'],
  standalone: true,
  imports: [TranslateModule, NgOptimizedImage],
})
export class ColumnsComponent {
  @Output() contactScroll = new EventEmitter<void>();
  @Output() contactNavigate = new EventEmitter<void>();
  protected readonly window = window;
}
