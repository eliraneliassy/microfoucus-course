import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Item } from './item';
import { db } from './data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  db = db;

  items: any[] = [...db];

  chagePrice() {
    this.items[0].price = 80;
  }

  constructor() {
    console.log(this.db);
  }

  onDelete(event) {
    this.items = this.items.filter(
      (item: any) =>
      item._id !== event._id);
  }


}
