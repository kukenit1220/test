import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from "ionic-angular";
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
@Injectable()
export class RegisterService {
  public token: string = '';
  public user: string;
  public id: string;
  public form: any;
  public model: any;
  public loading: any;
  public options: FormlyFormOptions;
  public fields: FormlyFieldConfig[];

  constructor(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
  ) {



  }

 
  

}