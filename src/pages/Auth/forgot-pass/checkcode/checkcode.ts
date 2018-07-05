import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { checkcodeFields } from './checkcode.model';
import { CheckcodeService } from './checkcode.service';
import { NewpasswordPage } from '../newpassword/newpassword';

@IonicPage()
@Component({
  selector: 'page-checkcode',
  templateUrl: 'checkcode.html',
})
export class CheckcodePage {
  public form = new FormGroup({});
  public model: any = {};
  public options: FormlyFormOptions = {};
  public fields: FormlyFieldConfig[] = checkcodeFields;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _checkcode: CheckcodeService,
  ) {
  }

  ngOnInit() {
    this._checkcode.initForm(this);
  }

  back() {
    this.navCtrl.pop();
  }
  
  checkCode() {
    this._checkcode.checkCode(() => {
      this.navCtrl.setRoot(NewpasswordPage);
    }, this.model.code)
  }
}
