import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [],
  template: `
    <p>
      {{ rating }}: {{ value }}
    </p>
  `,
  styles: ``
})
export class RatingComponent {
  @Input() rating = '';
  @Input() value = '';
}
