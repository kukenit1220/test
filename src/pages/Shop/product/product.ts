import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {
  time: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {}

  tapEventadd(index: number) {
    this.time[index].amount++;
  }

  tapEventsub(index: number) {
    if (this.time[index].amount > 0) {
      this.time[index].amount--;
    }
  }
}
