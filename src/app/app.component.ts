import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Item } from './item';
import { db } from './data';
import { ShoppingCartService } from './services/shopping-cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  db = db;

  items: any[] = [...db];



  constructor(private shoppingCartService: ShoppingCartService) {
  }

  chagePrice() {
    this.items[0].price = 80;
  }

  onDelete(event) {
    this.items = this.items.filter(
      (item: any) =>
        item._id !== event._id);
  }

  addToCart(item) {
    this.shoppingCartService.addToCart(item);
  }

  deleteFromCart(item) {
    this.shoppingCartService.removeFromCart(item);
  }

  itemInShoppingCart(item) {
    return this.shoppingCartService.itemInCart(item);
  }

  revmoveFromList(item) {
    this.items.splice(
      this.items.indexOf(item), 1
    );
  }


}
