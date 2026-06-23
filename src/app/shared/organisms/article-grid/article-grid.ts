import { Component, Input } from '@angular/core';
import { IArticle } from '@interfaces/article.interface';
import { SearchInput } from "../../atoms/search-input/search-input";
import { ArticleCard } from "../../molecules/article-card/article-card";

/**
 * @organism ArticleGrid
 * Sección 2 — Título, subtítulo, buscador y grid responsive de artículos.
 * Grid: 1 columna mobile, 2 columnas tablet, 3 columnas desktop.
 *
 * @example
 * <app-article-grid [articles]="articlesData" />
 */
@Component({
  selector: 'app-article-grid',
  standalone: true,
  imports: [SearchInput, ArticleCard],
  templateUrl: './article-grid.html',
  styleUrl: './article-grid.css',
})
export class ArticleGrid {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() articles: IArticle[] = [];
}
