import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IArticle } from '@interfaces/article.interface';
import { SearchInput } from "../../atoms/search-input/search-input";
import { ArticleCard } from "../../molecules/article-card/article-card";

@Component({
  selector: 'app-article-grid',
  standalone: true,
  imports: [CommonModule, SearchInput, ArticleCard],
  templateUrl: './article-grid.html',
})
export class ArticleGrid {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() articles: IArticle[] = [];
}
