import { Component } from '@angular/core';
import { HeaderComponent } from "../../organisms/header/header.component";
import { FooterComponent } from "../../organisms/footer/footer.component";

@Component({
  selector: 'app-home-page',
  imports: [HeaderComponent, FooterComponent],
  template: `
    <app-header />
      <p>aaaaaaaaaaa</p>
    <app-footer />
  `,
  styles: ``
})
export class HomePageComponent {

}
