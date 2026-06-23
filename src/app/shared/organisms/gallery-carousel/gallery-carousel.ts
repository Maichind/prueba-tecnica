import { Component, Input } from '@angular/core';
import { IGalleryItem } from '@interfaces/gallery-item.interface';
import { GalleryCard } from "../../molecules/gallery-card/gallery-card";

/**
 * @organism GalleryCarousel
 * Sección 3 — Título, descripción y carrusel/grid de gallery cards.
 * Carrusel: mobile y tablet, Grid: 4 columnas desktop.
 *
 * @example
 * <app-gallery-carousel [items]="galleryData" />
 */
@Component({
  selector: 'app-gallery-carousel',
  standalone: true,
  imports: [GalleryCard],
  templateUrl: './gallery-carousel.html',
})
export class GalleryCarousel {
  @Input() title = '';
  @Input() description = '';
  @Input() items: IGalleryItem[] = [];
}
