import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { CartService } from '../../components/cart/cart.service';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  public segment: string = 'ORDERS';

  constructor(public cart: CartService) {}

  ionViewDidLoad() {}
}
