import { Injectable } from '@angular/core';
import { FormlyFormOptions } from '@ngx-formly/core';

import { ApiProvider } from '../../../providers/api/api';
import { NotificationProvider } from '../../../providers/notification/notification';
import { AuthProvider } from '../../../providers/auth/auth';

@Injectable()
export class ForgotService {

  public form: any;
  public model: any;
  public loading: any;
  public options: FormlyFormOptions;

  constructor(
    public _api: ApiProvider,
    public _notification: NotificationProvider,
    public _auth: AuthProvider,

  ) { }

  public forgotPass(success) {
    this._auth.request({
      url: 'http://weedr.cyberair.co/api/auth/forgotpasword',
      errorMsg: 'We couldn\'t identify your email',
      success: (res) => {
        this._auth.dismissLoading();
        this._notification.success("Password reset email sent. Please check your spam folder.");
        success();
      }
    });
  }

}