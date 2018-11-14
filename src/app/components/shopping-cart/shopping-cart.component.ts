import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  itemsInCart: any[] = [];
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.itemsInCart = this.shoppingCartService.items;
    
  }

}
