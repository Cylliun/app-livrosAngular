import { Component, Input, signal } from '@angular/core';
import { CardLivroComponent } from "../../molecules/card-livro/card-livro.component";
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid-livros',
  imports: [CardLivroComponent, CommonModule],
  template: `
    <div class="grid grid-cols-4 p-4 gap-4">
      @for (book of books(); track $index) {
        <app-card-livro [book]="book" />
      }
    </div>
  `,
  styles: ``
})
export class GridLivrosComponent {
  @Input() books = signal<Book[]>([]);
};
