import { Component } from '@angular/core';
import {
  AlertController,
  IonicPage,
  LoadingController,
  MenuController,
  NavController,
  NavParams
} from 'ionic-angular';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

import { forgotFields } from './forgot.model';
import { ForgotService } from './forgot.service';
import { CheckcodePage } from './checkcode/checkcode';
import { StorageProvider } from '../../../providers/storage/storage';
import { AuthProvider } from '../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-forgot-pass',
  templateUrl: 'forgot-pass.html'
})
export class ForgotPassPage {
  public form = new FormGroup({});
  public model :any= {};
  public options: FormlyFormOptions = {};
  public fields: FormlyFieldConfig[] = forgotFields;

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public menuCtrl: MenuController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public forgot: ForgotService,
    public _auth: AuthProvider,
    public _storage: StorageProvider,
  ) {
    this.menuCtrl.swipeEnable(false);


  }

  ngOnInit() {
    this._auth.initForm(this);
  }

  submit() {
    this.forgot.forgotPass(() => {
      this.navCtrl.push(CheckcodePage);
      this._storage.set('emailForgot', JSON.stringify(this.model.email));
    });
  }

  back() {
    this.navCtrl.pop();
  }
}
