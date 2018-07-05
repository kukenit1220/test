import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { NavComponent } from './nav/nav';
import { CartComponent } from './cart/cart';
import { CartService } from '../components/cart/cart.service';

@NgModule({
  declarations: [NavComponent, CartComponent],
  imports: [IonicModule],
  exports: [NavComponent, CartComponent],
  providers: [CartService]
})
export class ComponentsModule {}
