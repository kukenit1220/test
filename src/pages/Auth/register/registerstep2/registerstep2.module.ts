import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Registerstep2Page } from './registerstep2';
import { Registerstep2Service} from './registerstep2.service'

import { ReactiveFormsModule } from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyIonicModule} from '@ngx-formly/ionic';

@NgModule({
  declarations: [Registerstep2Page],
  imports: [IonicPageModule.forChild(Registerstep2Page),ReactiveFormsModule,FormlyModule,FormlyIonicModule],
  providers: [Registerstep2Service]
})
export class Registerstep2PageModule {}
