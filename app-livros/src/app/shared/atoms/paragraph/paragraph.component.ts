import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-paragraph',
  standalone: true,
  imports: [],
  template: `
    <p class="text-sm font-light">
      {{ description }}: {{ value }}
    </p>
  `,
  styles: ``
})
export class ParagraphComponent {
  @Input() description = '';
  @Input() value = '';
}
