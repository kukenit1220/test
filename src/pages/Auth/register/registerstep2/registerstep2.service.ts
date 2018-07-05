import { Injectable } from '@angular/core';
import { ApiProvider } from '../../../../providers/api/api';
import { NotificationProvider } from '../../../../providers/notification/notification';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Injectable()
export class Registerstep2Service {
  loading: any;
  public model: any;
  public options: FormlyFormOptions;
  public form: FormGroup;
  public fields: FormlyFieldConfig[];

  constructor(
    private _api: ApiProvider,
    private _notification: NotificationProvider,
    private loadingCtrl: LoadingController,
  ) { }

  public initForm(controller) {
    this.form = controller.form;
    this.model = controller.model;
    this.options = controller.options;
  }

  public cameraOptions(camera, type) {
    return {
      quality: 50,
      destinationType: camera.DestinationType.DATA_URL,
      encodingType: camera.EncodingType.JPEG,
      mediaType: camera.MediaType.PICTURE,
      sourceType: camera.PictureSourceType[type],
      saveToPhotoAlbum: true,
      allowEdit: true,
      correctOrientation: true
    };
  }
  public register() {
    if (!this.form.valid) return;
    
    const register_1 = JSON.parse(localStorage.getItem('dataReg'));
    const photo = localStorage.getItem('photo')
    let data = {
      first_name: register_1.first_name,
      last_name: register_1.last_name,
      email: register_1.email,
      password: register_1.password,
      estimated_consumption: register_1.grams,
      referral_number: register_1.referral_number,
      identification_type: this.model.value.IdType,
      identification_image: photo,
      identification_number: this.model.value.IdNumber
    };

    this.request({
      url: 'http://weedr.cyberair.co/api/auth/register',
      data: data,
      errorMsg: 'We couldn\'t register your account',
      successMsg: 'Sign Up Success',
      success: () => {
        localStorage.removeItem('dataReg');
        localStorage.removeItem('photo')
        this.options.resetModel();

      }
    });
  }

  public request(config) {
    const { url, data, errorMsg, successMsg, success, error } = config;

    setTimeout(() => this.loadingShow(), 0);

    this._api.post(url, data).subscribe((res: any) => {
      if (res.success == true) {
        setTimeout(() => this.loading.dismiss(), 0);

        // if (successMsg)
        //   this._notification.success(successMsg);

        if (success)
          success(res);

      } else {
        if (errorMsg) this.error(errorMsg);
        if (error) error(res);
      }

    }, (res: any) => {
      if (errorMsg) this.error(errorMsg);
      if (error) error(res);
    });
  }

  public loadingShow() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    })
    this.loading.present();

  }

  private error(msg: string) {
    this.loading.dismiss();
    this._notification.error(msg);
  }
}