import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  template: `
    <img class="w-full h-auto rounded-md object-cover" [src]="src" loading="lazy">
  `,
  styles: ``
})
export class ImageComponent {
  @Input() src!: string;
}
