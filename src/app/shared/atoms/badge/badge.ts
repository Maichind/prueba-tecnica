import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [],
  templateUrl: './badge.html',
})
export class Badge {
  @Input() label: string = '';
}
