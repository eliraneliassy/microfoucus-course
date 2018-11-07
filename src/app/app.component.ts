import { ItemsDataService } from './services/items-data.service';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Item } from './item';
import { db } from './data';
import { ShoppingCartService } from './services/shopping-cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {


  db = db;

  items: any[];
  loading = true;
  page = 0;



  constructor(private shoppingCartService: ShoppingCartService,
    private itemsDataService: ItemsDataService) {
  }

  ngOnInit(): void {
    this.itemsDataService.getItems(this.page)
      .subscribe((items) => {
        this.items = items;
        this.loading = false;
      });
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

  changePage(number) {
    this.page = number;
    this.itemsDataService.getItems(this.page)
      .subscribe((items) => this.items = items);
  }

  getNextPage() {
    if (this.loading) { return; }
    this.loading = true;
    this.page++;
    this.itemsDataService.getItems(this.page)
      .subscribe((items: any[]) => {
        if (items.length === 0) {
          return;
        }
        this.items = [...this.items, ...items];
        this.loading = false;
      });
  }


}
