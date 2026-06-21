import { Component, Input } from '@angular/core';
import { IGalleryItem } from '@interfaces/gallery-item.interface';
import { ImagePlaceholder } from "../../atoms/image-placeholder/image-placeholder";

@Component({
  selector: 'app-gallery-card',
  standalone: true,
  imports: [ImagePlaceholder],
  templateUrl: './gallery-card.html',
})
export class GalleryCard {
  @Input() item!: IGalleryItem;
}
