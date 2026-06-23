import { Component, Input } from '@angular/core';

/**
 * @atom ImagePlaceholder
 * Simula una imagen con fondo gris y texto IMAGE centrado.
 * Soporta tres aspect-ratios: video (16:9), square (1:1), portrait (3:4).
 *
 * @example
 * <app-image-placeholder alt="Foto del producto" aspectRatio="video" />
 */
@Component({
  selector: 'app-image-placeholder',
  standalone: true,
  imports: [],
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
