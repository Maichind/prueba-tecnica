import { Component, Input } from '@angular/core';
import { Badge } from '../../atoms/badge/badge';
import { IArticle } from '@interfaces/article.interface';
import { ImagePlaceholder } from '../../atoms/image-placeholder/image-placeholder';

/**
 * @molecule ArticleCard
 * Tarjeta de artículo con imagen, badge de categoría, título y descripción truncada.
 * Combina ImagePlaceholderComponent + BadgeComponent.
 *
 * @example
 * <app-article-card [article]="articleData" />
 */
@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [ImagePlaceholder, Badge],
  templateUrl: './article-card.html',
})
export class ArticleCard {
  @Input() article!: IArticle;
}
