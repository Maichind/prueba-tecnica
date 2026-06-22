import { Component, Input } from '@angular/core';

/**
 * @atom Badge
 * Muestra un ícono SVG de calendario junto a un label de categoría.
 * Usado en ArticleCard y HeroCard para indicar la categoría del contenido.
 *
 * @example
 * <app-badge label="Lorem ipsum dolor sit amet." />
 */
@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [],
  templateUrl: './badge.html',
})
export class Badge {
  @Input() label = '';
}
