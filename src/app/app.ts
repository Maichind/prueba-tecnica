import { Component, signal } from '@angular/core';
import { Badge } from "./shared/atoms/badge/badge";
import { Button } from "./shared/atoms/button/button";
import { ImagePlaceholder } from "./shared/atoms/image-placeholder/image-placeholder";

@Component({
  selector: 'app-root',
  imports: [ImagePlaceholder, Badge, Button],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prueba-tecnica');
}
