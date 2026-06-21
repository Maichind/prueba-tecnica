import { Component, signal } from '@angular/core';
import { Badge } from "./shared/atoms/badge/badge";
import { Button } from "./shared/atoms/button/button";
import { SearchInput } from "./shared/atoms/search-input/search-input";
import { ImagePlaceholder } from "./shared/atoms/image-placeholder/image-placeholder";

import { IArticle } from '@interfaces/article.interface';
import { ArticleCard } from "./shared/molecules/article-card/article-card";

@Component({
  selector: 'app-root',
  imports: [ImagePlaceholder, Badge, Button, SearchInput, ArticleCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prueba-tecnica');

  article: IArticle = {
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
    category: 'Lorem ipsum dolor sit amet.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
    imageAlt: 'Imagen del artículo 1',
  };
}
