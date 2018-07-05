import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  public open = false;
  public atCheckout = false;

  constructor() {}

  public toggle() {
    this.open = !this.open;
  }
}
