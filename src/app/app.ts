import { Component, signal } from '@angular/core';
import { ImagePlaceholder } from "./shared/atoms/image-placeholder/image-placeholder";

@Component({
  selector: 'app-root',
  imports: [ImagePlaceholder],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prueba-tecnica');
}
