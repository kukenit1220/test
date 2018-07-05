import { Component } from '@angular/core';
import {
  IonicPage,
  LoadingController,
  MenuController,
  NavController,
  NavParams
} from 'ionic-angular';

import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { registerFields } from "./register.model";
import { AuthProvider } from '../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  // authForm: FormGroup;
  confirm: boolean = false;
  public form = new FormGroup({});
  public model = {};
  public options: FormlyFormOptions = {};
  public fields: FormlyFieldConfig[] = registerFields;
  constructor(
    // public formBuilder: FormBuilder,
    public menuCtrl: MenuController,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public _auth: AuthProvider,
    public navParams: NavParams
  ) {
    this.menuCtrl.swipeEnable(false);

  }
  ngOnInit() {
    this._auth.initForm(this);
    this._auth.setPassMatch(this);
  }
  back() {
    this.navCtrl.pop();
  }
  register() {
    this._auth.register(this);
  }

}
