import { Component, signal } from '@angular/core';
import { IHero } from '@interfaces/hero.interface';
import { IArticle } from '@interfaces/article.interface';
import { ARTICLES_DATA, HERO_DATA } from '@constants/mock-data';
import { HeroCard } from "./shared/organisms/hero-card/hero-card";
import { ArticleGrid } from "./shared/organisms/article-grid/article-grid";

@Component({
  selector: 'app-root',
  imports: [HeroCard, ArticleGrid],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prueba-tecnica');

  heroData: IHero = HERO_DATA;
  articles: IArticle[] = ARTICLES_DATA;
}
