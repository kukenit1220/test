import { Injectable } from '@angular/core';
import {ToastController} from "ionic-angular";

@Injectable()
export class NotificationProvider {
    toast:any;
    constructor(
        private toastCtrl: ToastController,
    ) { }

    public success(msg: string ) {
      this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top',
            cssClass :'is-success'
        }).present();
  

    }

    public error(msg: string) {
         this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top',
            cssClass :'is-error'
        }).present();
    }

    public warning(msg: string) {
        this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top',
            cssClass :'is-warning'
        });

    }

}
