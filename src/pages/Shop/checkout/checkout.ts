import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { CartService } from '../../../components/cart/cart.service';

@IonicPage({name : 'checkout'})
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html'
})
export class CheckoutPage {
  constructor(public cart: CartService) {}

  ionViewDidLoad() {
    this.cart.atCheckout = true;
  }

  ionViewDidLeave() {
    this.cart.atCheckout = false;
  }
}
