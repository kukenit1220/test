import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

import { newpassFields } from './newpass.model';
import { NewpassService } from './newpass.service';
import { LoginPage } from '../../login/login';

@IonicPage()
@Component({
  selector: 'page-newpassword',
  templateUrl: 'newpassword.html',
})
export class NewpasswordPage {
  
  public form = new FormGroup({});
  public model :any= {};
  public options: FormlyFormOptions = {};
  public fields: FormlyFieldConfig[] = newpassFields;

  constructor(
    public _newpass : NewpassService,
    public _navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }

  ngOnInit() {
    this._newpass.initForm(this);
    this._newpass.setPassMatch(this);
  }
  
  resetPass(){
    this._newpass.resetPass(()=>{
      this._navCtrl.setRoot(LoginPage);
    },this.model.new_password)
  }
}
