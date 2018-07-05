import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';

import { AccountPage } from './account';
import { OrdersPage } from './orders/orders';
import { AddressesPage } from './addresses/addresses';
import { DetailsPage } from './details/details';

@NgModule({
  declarations: [AccountPage, OrdersPage, AddressesPage, DetailsPage],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AccountPage),
    ReactiveFormsModule
  ]
})
export class AccountPageModule {}
