import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckcodePage } from './checkcode';

import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyIonicModule } from '@ngx-formly/ionic';
import { CheckcodeService } from './checkcode.service';

export function minlengthValidationMessage(err, field) {
  return `Should have atleast ${field.templateOptions.minLength} numbers`;
}

export function maxlengthValidationMessage(err, field) {
  return `This value should be less than ${field.templateOptions.maxLength} numbers`;
}
@NgModule({
  declarations: [
    CheckcodePage,
  ],
  imports: [
    IonicPageModule.forChild(CheckcodePage),
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'minlength', message: minlengthValidationMessage },
        { name: 'maxlength', message: maxlengthValidationMessage },
      ]
    }),
    FormlyIonicModule
  ],
  providers :[CheckcodeService]
})
export class CheckcodePageModule { }
