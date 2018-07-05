import { Injectable } from '@angular/core';
import { FormlyFormOptions } from '@ngx-formly/core';


import { ApiProvider } from '../../../../providers/api/api';
import { NotificationProvider } from '../../../../providers/notification/notification';
import { Registerstep2Service } from '../../register/registerstep2/registerstep2.service';
import { StorageProvider } from '../../../../providers/storage/storage';



@Injectable()
export class CheckcodeService {

  public form: any;
  public model: any = {};
  public loading: any;
  public options: FormlyFormOptions;

  constructor(
    public _api: ApiProvider,
    public _notification: NotificationProvider,
    public _register: Registerstep2Service,
    public _storage: StorageProvider,
  ) { }

  public initForm(controller) {
    this.form = controller.form;
    this.model = controller.model;
    this.options = controller.options;

  }
  public checkCode(success, code) {
    let emailForgot = JSON.parse(this._storage.get('emailForgot'))
    let data = {
      email: emailForgot,
      code: code,
    }

    this._register.request({
      url: 'http://weedr.cyberair.co/api/auth/checkcode',
      data: data,
      errorMsg: 'We couldn\'t check your code',
      successMsg: 'Send code success',
      success: (res) => {
        // this._register.loadingShow();
        // this._notification.success(res.message);
        //  this._storage.remove('emailFogot');
        success();
      },
      error: (res) => {
        this._notification.error(res.message);
      }
    });
  }

}