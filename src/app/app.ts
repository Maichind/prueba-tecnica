import { Component, signal } from '@angular/core';
import { Home } from "./features/home/home";

@Component({
  selector: 'app-root',
  imports: [Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prueba-tecnica');
}
