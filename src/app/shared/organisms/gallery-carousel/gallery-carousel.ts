import { 
  Component, 
  ElementRef, 
  Input, 
  ViewChild 
} from '@angular/core';
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

  @ViewChild('carouselTrack') carouselTrack!: ElementRef<HTMLDivElement>;

  activeIndex = 0;

  goTo(index: number): void {
    this.activeIndex = index;
    const track = this.carouselTrack.nativeElement;
    const cardWidth = track.scrollWidth / this.items.length;
    track.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
  }

  scrollNext(): void {
    const next = Math.min(this.activeIndex + 1, this.items.length - 1);
    this.goTo(next);
  }

  scrollPrev(): void {
    const prev = Math.max(this.activeIndex - 1, 0);
    this.goTo(prev);
  }

  onScroll(): void {
    const track = this.carouselTrack.nativeElement;
    const children = Array.from(track.children) as HTMLElement[];
    const containerCenter = track.scrollLeft + track.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    children.forEach((child, i) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    });

    this.activeIndex = closestIndex;
  }
}
