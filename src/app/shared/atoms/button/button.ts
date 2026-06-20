import { Component, EventEmitter, Input, Output } from '@angular/core';

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
