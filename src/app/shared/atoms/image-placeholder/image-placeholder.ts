import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-placeholder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-placeholder.html',
})
export class ImagePlaceholder {
  @Input() alt = '';
  @Input() aspectRatio: 'video' | 'square' | 'portrait' = 'video';

  get aspectClass(): string {
    const map = {
      video: 'aspect-video',
      square: 'aspect-square',
      portrait: 'aspect-[3/4]',
    };
    return map[this.aspectRatio];
  }
}
