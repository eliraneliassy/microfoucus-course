import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Item } from './item';
import { db } from './data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  items: any[] = [...db];

  chagePrice() {
    this.items[0].price = 80;
  }


}
