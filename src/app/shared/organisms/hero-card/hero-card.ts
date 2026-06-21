import { Component, Input } from '@angular/core';
import { Badge } from "../../atoms/badge/badge";
import { IHero } from '@interfaces/hero.interface';
import { Button } from "../../atoms/button/button";
import { ImagePlaceholder } from "../../atoms/image-placeholder/image-placeholder";

@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [ImagePlaceholder, Badge, Button],
  templateUrl: './hero-card.html',
})
export class HeroCard {
  @Input() hero!: IHero;
}
