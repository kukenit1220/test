import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';

import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyIonicModule } from '@ngx-formly/ionic';
import { LoginService } from "./login.service";
import { StorageProvider } from '../../../providers/storage/storage';
import { AuthProvider } from '../../../providers/auth/auth';

@NgModule({
  declarations: [LoginPage],
  imports: [IonicPageModule.forChild(LoginPage), ReactiveFormsModule, FormlyModule, FormlyIonicModule],
  providers: [LoginService, StorageProvider, AuthProvider],
})
export class LoginPageModule { }
