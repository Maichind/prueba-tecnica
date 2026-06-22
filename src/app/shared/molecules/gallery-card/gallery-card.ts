import { Component, Input } from '@angular/core';
import { IGalleryItem } from '@interfaces/gallery-item.interface';
import { ImagePlaceholder } from "../../atoms/image-placeholder/image-placeholder";

/**
 * @molecule GalleryCard
 * Tarjeta de galería con imagen full-bleed, overlay gradiente negro,
 * título y subtítulo blancos, y CTA con ícono de descarga.
 *
 * @example
 * <app-gallery-card [item]="galleryItem" />
 */
@Component({
  selector: 'app-gallery-card',
  standalone: true,
  imports: [ImagePlaceholder],
  templateUrl: './gallery-card.html',
})
export class GalleryCard {
  @Input() item!: IGalleryItem;
}
