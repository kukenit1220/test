import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { model } from '../../shop/list/list.model';

@Component({
  selector: 'account-orders',
  templateUrl: 'orders.html'
})
export class OrdersPage {
  public orders = [
    {
      status: 'Complete',
      number: 872,
      date: '01/01/2018',
      time: '08:30',
      products: [model.weed[0], model.weed[1], model.extract[2]],
      show: false
    },
    {
      status: 'Proccessing',
      number: 472,
      date: '03/02/2018',
      time: '22:30',
      products: [model.weed[3], model.weed[0], model.extract[1]],
      show: false
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {}

  toggleOrderVisibility(order) {
    order.show = !order.show;
  }
}
