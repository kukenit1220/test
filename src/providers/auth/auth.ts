import { Injectable, ViewChild } from '@angular/core';
import { LoadingController, Nav, ToastController } from "ionic-angular";
import { FormlyFormOptions } from '@ngx-formly/core';


import { ApiProvider } from '../api/api';
import { NotificationProvider } from '../notification/notification';
import { StorageProvider } from '../storage/storage';
import { ListPage } from '../../pages/shop/list/list';
import { LoginPage } from '../../pages/Auth/login/login';
import { Registerstep2Page } from '../../pages/Auth/register/registerstep2/registerstep2';


@Injectable()
export class AuthProvider {
  public token: string = '';

  public form: any;
  public model: any;
  public loading: any;
  public options: FormlyFormOptions;
  constructor(
    public _api: ApiProvider,
    public notification: NotificationProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public _storage: StorageProvider,
  ) {
  }

  public initForm(controller) {
    this.form = controller.form;
    this.model = controller.model;
    this.options = controller.options;

  }
  public setPassMatch(controller) {
    controller.fields[4].validators.fieldMatch = {
      expression: (control) => control.value === this.model.password,
      message: 'Passwords not matching!',
    }
  }

  public register(controller) {
    if (this.form.valid) {
      this.testPassMatch();
      this.loadingShow();
      setTimeout(() => {
        this.loading.dismiss();
        let data = JSON.stringify({
          first_name: this.model.first_name,
          last_name: this.model.last_name,
          email: this.model.email,
          password: this.model.password,
          grams: this.model.grams,
          referral_number: this.model.referral_number
        })
        controller.navCtrl.push(Registerstep2Page);
        localStorage.setItem('dataReg', data);
      }, 200);

    }
  }

  private testPassMatch() {
    const pass = this.model.password;
    const match = this.model.passwordConfirm;
    const matchCtrl = this.form.controls['passwordConfirm'];

    if (pass !== match)
      return matchCtrl.setErrors({
        'valueDifferent': true
      });
  }

  
  public checkToken(controller) {
    this.token = this._storage.get('token');
    if (this.token) controller.nav.setRoot(ListPage)
    !this.token ? controller.nav.setRoot(LoginPage) : false;
  }

  public logout(controller) {
    const url = 'http://weedr.cyberair.co/api/auth/logout'
    const token = this._storage.get('token');

    this.loadingShow();
    this._api.post(url, token).subscribe((res: any) => {
      if (res.success == true) this.clearData(controller);
      this.dismissLoading();
    }, error => {
      this.dismissLoading();
      this.notification.error('We couldn\'t logout you in');
    });
  }

  private clearData(controller) {
    this.dismissLoading();
    controller.nav.setRoot(LoginPage);
    this._storage.clear();
    this.token = null;
  }

  public login(success) {
    this.request({
      url: 'http://weedr.cyberair.co/api/auth/login',
      errorMsg: 'We couldn\'t sign you in',
      success: (res) => {
        this._storage.set('token', res.token);
        this._storage.set('id', res.data.id);
        this.dismissLoading();
        success();
      }
    });
  }

  public request(config) {
    const { url, errorMsg, success } = config;

    if (this.form.valid) {
      this.loadingShow();
      this._api.post(url, this.model).subscribe((res: any) => {
        if (res.success) return success(res);
        this.error(res.message)
      }, error => {
        this.error(errorMsg)
      });
    }
  }


  public error(msg: string) {
    this.dismissLoading();
    this.notification.error(msg)
    this.options.resetModel();
  }

  public loadingShow() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    })
    this.loading.present();
  }

  public dismissLoading() {
    if (this.loading) {
      this.loading.dismiss();
      this.loading = null;
    }
  }



}
