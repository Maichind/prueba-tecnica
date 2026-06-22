import { Component, Input } from '@angular/core';

/**
 * @atom SearchInput
 * Input de búsqueda con ícono lupa. Label visualmente oculto para accesibilidad.
 *
 * @example
 * <app-search-input placeholder="Lorem ipsum dolor sit" />
 */
@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [],
  templateUrl: './search-input.html',
})
export class SearchInput {
  @Input() placeholder = '';
}
