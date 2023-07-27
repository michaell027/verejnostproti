import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {
  transform(value: string, maxWords: number): string {
    if (!value) return '';

    const words = value.split(' ');
    const truncatedWords = words.slice(0, maxWords);

    return truncatedWords.join(' ') + '...';
  }
}
