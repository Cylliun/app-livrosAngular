import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  template: `
    <h2 class="text-xl font-bold">{{ title }}: {{ value }}</h2>
    `,
  styles: ``
})
export class TitleComponent {
  @Input() title = '';
  @Input() value = '';
}
