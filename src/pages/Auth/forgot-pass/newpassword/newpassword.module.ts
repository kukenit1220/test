import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewpasswordPage } from './newpassword';

import { ReactiveFormsModule } from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyIonicModule} from '@ngx-formly/ionic';
import { NewpassService } from './newpass.service';

@NgModule({
  declarations: [
    NewpasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(NewpasswordPage),
    ReactiveFormsModule,
    FormlyModule,
    FormlyIonicModule
  ],
  providers : [NewpassService]
})
export class NewpasswordPageModule {}
