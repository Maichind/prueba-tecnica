import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [],
  templateUrl: './search-input.html',
})
export class SearchInput {
  @Input() placeholder = '';
}
