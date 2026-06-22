import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IGalleryItem } from '@interfaces/gallery-item.interface';
import { GalleryCard } from "../../molecules/gallery-card/gallery-card";

@Component({
  selector: 'app-gallery-carousel',
  standalone: true,
  imports: [CommonModule, GalleryCard],
  templateUrl: './gallery-carousel.html',
})
export class GalleryCarousel {
  @Input() title = '';
  @Input() description = '';
  @Input() items: IGalleryItem[] = [];
}
