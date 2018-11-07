import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ItemsDataService } from 'src/app/services/items-data.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

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
