import { Component, Input } from '@angular/core';
import { Badge } from "../../atoms/badge/badge";
import { IHero } from '@interfaces/hero.interface';
import { Button } from "../../atoms/button/button";
import { ImagePlaceholder } from "../../atoms/image-placeholder/image-placeholder";

/**
 * @organism HeroCard
 * Sección 1 — Card destacada con imagen, badge, título, descripción y CTA.
 * Layout vertical en mobile/tablet, horizontal en desktop.
 *
 * @example
 * <app-hero-card [hero]="heroData" />
 */
@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [ImagePlaceholder, Badge, Button],
  templateUrl: './hero-card.html',
})
export class HeroCard {
  @Input() hero!: IHero;
}
