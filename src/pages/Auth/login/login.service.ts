import { Injectable, ViewChild } from '@angular/core';
import { LoadingController, Nav, ToastController } from "ionic-angular";
import { FormlyFormOptions } from '@ngx-formly/core';
import { ApiProvider } from "../../../providers/api/api";
import { NotificationProvider } from "../../../providers/notification/notification";
import { StorageProvider } from '../../../providers/storage/storage';
import { ListPage } from '../../shop/list/list';
import { LoginPage } from './login';

@Injectable()
export class LoginService {
  @ViewChild(Nav) nav: Nav
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
    public _storage: StorageProvider, ) {
  }



}