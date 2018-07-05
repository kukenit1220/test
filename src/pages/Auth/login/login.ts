import { Component } from '@angular/core';
import { IonicPage, LoadingController, MenuController, NavController, NavParams, Platform } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { RegisterPage } from '../register/register';
import { ForgotPassPage } from '../forgot-pass/forgot-pass';

import { ApiProvider } from "../../../providers/api/api";
import { NotificationProvider } from "../../../providers/notification/notification";
import { loginFields } from "./login.model";
import { ListPage } from '../../shop/list/list';
import { AuthProvider } from '../../../providers/auth/auth';

@IonicPage({ name: 'login' })
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // authForm: FormGroup;
  public form = new FormGroup({});
  public model = {};
  public options: FormlyFormOptions = {};
  public fields: FormlyFieldConfig[] = loginFields;

  constructor(public menuCtrl: MenuController,
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public api: ApiProvider,
    public _auth: AuthProvider,
    public platform: Platform,
    public notification: NotificationProvider, ) {
    this.menuCtrl.swipeEnable(false);

  }

  ngOnInit() {
    this._auth.initForm(this);
  }

  login() {
    this._auth.login(() => {
      this.navCtrl.setRoot(ListPage);
      this.form.reset();
      this.options.resetModel();
    });
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  forgotPass() {
    this.navCtrl.push(ForgotPassPage);
  }


}
