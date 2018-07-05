import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgotPassPage } from './forgot-pass';
import { ReactiveFormsModule } from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyIonicModule} from '@ngx-formly/ionic';
import { ForgotService } from './forgot.service';
import { AuthProvider } from '../../../providers/auth/auth';
@NgModule({
  declarations: [ForgotPassPage],
  imports: [IonicPageModule.forChild(ForgotPassPage),ReactiveFormsModule,FormlyModule,FormlyIonicModule],
  providers: [ForgotService,AuthProvider]
})
export class ForgotPassPageModule {}
