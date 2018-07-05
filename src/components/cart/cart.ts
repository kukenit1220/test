import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CheckoutPage } from '../../pages/shop/checkout/checkout';

import { CartService } from './cart.service';

import { model } from '../../pages/shop/list/list.model';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.html'
})
export class CartComponent {
  public products = [model.weed[0], model.weed[1], model.extract[2]];
  constructor(public cart: CartService, private navCtrl: NavController) {}

  toggleQuantity(item: number, add: boolean = true) {
    if (add) {
      this.products[item].amount++;
    } else {
      this.products[item].amount > 0 ? this.products[item].amount-- : null;
    }
  }

  checkout() {
    this.cart.open = false;
    setTimeout(() => {
      this.navCtrl.push(CheckoutPage);
    }, 300);
  }

  cartClass() {
    if (this.cart.open) {
      return 'is-open';
    } else {
      return 'is-closed';
    }
  }
}
