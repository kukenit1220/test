import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';

import { ReactiveFormsModule } from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyIonicModule} from '@ngx-formly/ionic';
import { RegisterService } from './register.service';
import { AuthProvider } from '../../../providers/auth/auth';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    ReactiveFormsModule,FormlyModule,FormlyIonicModule
  ],
  providers :[RegisterService,AuthProvider]
})
export class RegisterPageModule {}
