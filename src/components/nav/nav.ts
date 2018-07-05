import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AccountPage } from '../../pages/account/account';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: 'nav.html'
})
export class NavComponent {
  @Input('back') back = false;
  constructor(public cart: CartService, private navCtrl: NavController) {}

  profile() {
    this.navCtrl.push(AccountPage);
  }

  goBack() {
    this.navCtrl.pop();
  }
}
