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

  shoppingCart: any[] = [];

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

  addToCart(item) {
    if (!this.itemInShoppingCart(item)) {
      this.shoppingCart.push(item);
      console.log(this.shoppingCart);
    }

  }

  deleteFromCart(item) {
    const index = this.shoppingCart.indexOf(item);
    if (index > -1) {
      this.shoppingCart.splice(index, 1);
      console.log(this.shoppingCart);
    }
  }

  itemInShoppingCart(item) {
    return this.shoppingCart.indexOf(item) > -1;
  }

  revmoveFromList(item) {
    this.items.splice(
      this.items.indexOf(item), 1
    );
  }


}
