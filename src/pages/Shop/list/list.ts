import { Component } from '@angular/core';
import {
  Events,
  IonicPage,
  ModalController,
  NavController,
  NavParams
} from 'ionic-angular';
import { ProductPage } from '../product/product';

import { ListService } from './list.service';

@IonicPage({ name: 'list' })
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  public products: any;
  public weed: any;
  public amount: number;
  public medical: any;
  public extract: any;
  public other: any;
  public segment: string = 'weed';
  public isShow: boolean = true;
  public showData: boolean = false;

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public event: Events,
    public navParams: NavParams,
    public _list: ListService,
  ) {
    this._list.getLists(2, (res) => {
      this.extract = res.data;
    });
    this._list.getLists(3, (res) => {
      this.medical = res.data;
    });
    this._list.getLists(4, (res) => {
      this.other = res.data;
    });

    this.segment = 'weed';
  }

  ionViewDidLoad() {
    this._list.getLists(1, (res) => {
      this.products = res.data;
      this.weed = res.data;
      this.isShow = false;
      this.showData = true;

    });

  }

  toggleQuantity(item: number, add: boolean = true) {
    if (add) {
      this.products[item].amount++;
      console.log(this.products[item]);
    } else {
      this.products[item].amount > 0 ? this.products[item].amount-- : null;
    }
  }

  productDetail() {
    this.navCtrl.push(ProductPage);
  }

  changeTab() {
    this.products = this[this.segment];
  }
}
