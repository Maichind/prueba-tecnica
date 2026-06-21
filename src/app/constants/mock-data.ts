import { IHero } from '@interfaces/hero.interface';
import { IArticle } from '@interfaces/article.interface';
import { IGalleryItem } from '@interfaces/gallery-item.interface';

export const HERO_DATA: IHero = {
  badge: 'Lorem ipsum dolor sit amet.',
  title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
  descriptionExtra: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
  ctaLabel: 'Lorem ipsum.',
  imageAlt: 'Imagen principal del artículo destacado',
};

export const ARTICLES_DATA: IArticle[] = [
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
    category: 'Lorem ipsum dolor sit amet.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
    imageAlt: 'Imagen del artículo 1',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
    category: 'Lorem ipsum dolor sit amet.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
    imageAlt: 'Imagen del artículo 2',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
    category: 'Lorem ipsum dolor sit amet.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
    imageAlt: 'Imagen del artículo 3',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
    category: 'Lorem ipsum dolor sit amet.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
    imageAlt: 'Imagen del artículo 4',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
    category: 'Lorem ipsum dolor sit amet.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
    imageAlt: 'Imagen del artículo 5',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
    category: 'Lorem ipsum dolor sit amet.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
    imageAlt: 'Imagen del artículo 6',
  },
];

export const GALLERY_DATA: IGalleryItem[] = [
  {
    title: 'Lorem ipsum',
    subtitle: 'Lorem ipsum dolor sit amet consectetur.',
    ctaLabel: 'Lorem ipsum',
    imageAlt: 'Imagen de galería 1',
  },
  {
    title: 'Lorem ipsum',
    subtitle: 'Lorem ipsum dolor sit amet consectetur.',
    ctaLabel: 'Lorem ipsum',
    imageAlt: 'Imagen de galería 2',
  },
  {
    title: 'Lorem ipsum',
    subtitle: 'Lorem ipsum dolor sit amet consectetur.',
    ctaLabel: 'Lorem ipsum',
    imageAlt: 'Imagen de galería 3',
  },
  {
    title: 'Lorem ipsum',
    subtitle: 'Lorem ipsum dolor sit amet consectetur.',
    ctaLabel: 'Lorem ipsum',
    imageAlt: 'Imagen de galería 4',
  },
];
