import { Injectable } from '@angular/core';
import { NotificationProvider } from '../../../providers/notification/notification';
import { LoadingController } from 'ionic-angular';
import { ApiProvider } from '../../../providers/api/api';

@Injectable()
export class ListService {
  public loading: any;
  //public lists: any =[];

  constructor(
    public _notification: NotificationProvider,
    private loadingCtrl: LoadingController,
    public _api: ApiProvider,
  ) { }

  public getLists(id, success) {
    this.request({
      url: 'http://weedr.cyberair.co/api/product/listproduct/' + id,
      errorMsg: 'We couldn\'t get the job list',
      success: (res) => {
        success(res);
      }
    });
  }

  public request(config) {
    const { url, errorMsg, successMsg, success, error } = config;

    //  this.loadingShow()
    this._api.get(url).subscribe((res: any) => {
      if (res.success) {
        // this.loading.dismiss()

        if (successMsg)
          this._notification.success(successMsg);

        if (success)
          success(res);
      }
      else
        this.error(errorMsg);
    }, err => {
      this.error(errorMsg);
      if (error)
        return error(err);
    });
  }

  public loadingShow() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    })
    this.loading.present();

  }

  private error(msg: string) {
    // this.loading.dismiss();
    this._notification.error(msg);
  }

}