import { Component } from '@angular/core';
import { HeaderComponent } from "../../organisms/header/header.component";
import { FooterComponent } from "../../organisms/footer/footer.component";

@Component({
  selector: 'app-book-page',
  imports: [HeaderComponent, FooterComponent],
  template: `
    <app-header />
      <p>book-page works!</p>
    <app-footer \>
  `,
  styles: ``
})
export class BookPageComponent {

}
