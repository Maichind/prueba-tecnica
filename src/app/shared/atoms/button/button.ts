import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * @atom Button
 * Botón CTA rojo con texto blanco. Variant primary para acciones principales.
 *
 * @example
 * <app-button label="Lorem ipsum." (clicked)="onAction()" />
 */
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.html',
})
export class Button {
  @Input() label = '';
  @Input() type: 'button' | 'submit' = 'button';
  @Output() clicked = new EventEmitter<void>();
}
