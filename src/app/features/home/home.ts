import { Component } from '@angular/core';
import { IHero } from '@interfaces/hero.interface';
import { IArticle } from '@interfaces/article.interface';
import { IGalleryItem } from '@interfaces/gallery-item.interface';
import { HERO_DATA, ARTICLES_DATA, GALLERY_DATA } from '@constants/mock-data';
import { HeroCard } from "../../shared/organisms/hero-card/hero-card";
import { ArticleGrid } from "../../shared/organisms/article-grid/article-grid";
import { GalleryCarousel } from "../../shared/organisms/gallery-carousel/gallery-carousel";

/**
 * @page Home
 * Página principal — ensambla las 3 secciones: HeroCard, ArticleGrid y GalleryCarousel.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroCard, ArticleGrid, GalleryCarousel],
  templateUrl: './home.html',
})
export class Home {
  hero: IHero = HERO_DATA;
  articles: IArticle[] = ARTICLES_DATA;
  galleryItems: IGalleryItem[] = GALLERY_DATA;

  readonly articlesTitle = 'Lorem ipsum dolor sit';
  readonly articlesSubtitle = 'Lorem ipsum dolor sit';
  readonly galleryTitle = 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.';
  readonly galleryDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.';
}
