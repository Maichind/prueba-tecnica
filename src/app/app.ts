import { Component, signal } from '@angular/core';
import { IHero } from '@interfaces/hero.interface';
import { IArticle } from '@interfaces/article.interface';
import { HeroCard } from "./shared/organisms/hero-card/hero-card";
import { IGalleryItem } from '@interfaces/gallery-item.interface';
import { ArticleGrid } from "./shared/organisms/article-grid/article-grid";
import { ARTICLES_DATA, GALLERY_DATA, HERO_DATA } from '@constants/mock-data';
import { GalleryCarousel } from "./shared/organisms/gallery-carousel/gallery-carousel";

@Component({
  selector: 'app-root',
  imports: [HeroCard, ArticleGrid, GalleryCarousel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prueba-tecnica');

  heroData: IHero = HERO_DATA;
  articles: IArticle[] = ARTICLES_DATA;
  galleryItems: IGalleryItem[] = GALLERY_DATA;
}
