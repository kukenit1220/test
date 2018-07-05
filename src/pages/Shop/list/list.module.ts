import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPage } from './list';
import { ComponentsModule } from '../../../components/components.module';
import { ListService } from './list.service';

@NgModule({
  declarations: [ListPage],
  imports: [ComponentsModule, IonicPageModule.forChild(ListPage)],
  providers: [ListService],
})
export class ListPageModule { }
