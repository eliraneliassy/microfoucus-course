import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  items: any[] = [];
  constructor() { }

  addToCart(item) {
    this.items.push(item);
  }

  removeFromCart(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  removeAllItem() {
    this.items = [];
  }

  itemInCart(item): boolean {
    return this.items.indexOf(item) > -1;
  }
}
