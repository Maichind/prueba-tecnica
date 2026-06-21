import { Component, signal } from '@angular/core';
import { HERO_DATA } from '@constants/mock-data';
import { IHero } from '@interfaces/hero.interface';
import { HeroCard } from "./shared/organisms/hero-card/hero-card";

@Component({
  selector: 'app-root',
  imports: [HeroCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prueba-tecnica');

  heroData: IHero = HERO_DATA;
}
