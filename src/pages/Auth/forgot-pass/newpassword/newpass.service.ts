import { Injectable } from '@angular/core';

import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Registerstep2Service } from '../../register/registerstep2/registerstep2.service';
import { StorageProvider } from '../../../../providers/storage/storage';

@Injectable()
export class NewpassService {

  public form: any;
  public model: any;
  public options: FormlyFormOptions;
  public fields: FormlyFieldConfig[];

  constructor(
    public _register: Registerstep2Service,
    public _storage: StorageProvider,
  ) { }


  public initForm(controller) {
    this.form = controller.form;
    this.model = controller.model;
    this.options = controller.options;
  }

  public setPassMatch(controller) {
    controller.fields[1].validators.fieldMatch = {
      expression: (control) => control.value === this.model.new_password,
      message: 'Passwords not matching!',
    }
  }
  public resetPass(success, new_password) {

    let emailForgot = JSON.parse(this._storage.get('emailForgot'))
    let data = {
      email: emailForgot,
      password: new_password
    }

    if (this.form.valid) {
      this._register.request({
        url: 'http://weedr.cyberair.co/api/auth/refreshpassword',
        data: data,
        errorMsg: 'We couldn\'t reset your password',
        successMsg: 'Reset password success',
        success: () => {
          this.options.resetModel();
          this._storage.remove('emailFogot');
          success();
        }
      })
    }

  }
}