import { Component, Input } from '@angular/core';
import { TitleComponent } from "../../atoms/title/title.component";
import { ImageComponent } from "../../atoms/image/image.component";
import { ParagraphComponent } from "../../atoms/paragraph/paragraph.component";
import { RatingComponent } from "../../atoms/rating/rating.component";
import { Book } from '../../models/book';

@Component({
  selector: 'app-card-livro',
  imports: [TitleComponent, ImageComponent, ParagraphComponent, RatingComponent],
  template: `
  <div class="flex bg-slate-200 p-4 shadow-md border rounded-md">
    <div class="flex flex-col justify-center items-center">
      <app-title title="title" [value]="book.title"></app-title>
      <app-image [src]="book.imageUrl"></app-image>
      <app-paragraph description="paragraph" [value]="book.description"></app-paragraph>
      <app-rating rating="rating" [value]="book.rating"></app-rating>
    </div>
  </div>
  `,
  styles: ``
})
export class CardLivroComponent {
  @Input() book!: Book;
}
