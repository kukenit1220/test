import { Component } from '@angular/core';
import {
  ActionSheetController,
  AlertController,
  IonicPage,
  LoadingController,
  MenuController,
  NavController,
  NavParams
} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Platform } from 'ionic-angular/platform/platform';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig,FormlyFormOptions} from '@ngx-formly/core';
import { Registerstep2Service } from './registerstep2.service';
import { registerstep2Fields } from './registerstep2.model';

@IonicPage()
@Component({
  selector: 'page-registerstep2',
  templateUrl: 'registerstep2.html'
})
export class Registerstep2Page {
  public photos: any;
  public idType: string;
  public base64Image: string;
 
  public isUpload: boolean = false;
  public form = new FormGroup({});
  public model = {};
  public options: FormlyFormOptions = {};
  public fields: FormlyFieldConfig[] = registerstep2Fields;
  constructor(
    public menuCtrl: MenuController,
    public actionsheetCtrl: ActionSheetController,
    public platform: Platform,
    private camera: Camera,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public RegisterServicestep2: Registerstep2Service
  ) {
    this.menuCtrl.swipeEnable(false);
    
  }

  back() {
    this.navCtrl.pop();
  }

  uploadID() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Option',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Take photo',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'ios-camera-outline' : null,
          handler: () => {
            const type = 'PICTURE';
            this.photo(type);
          }
        },
        {
          text: 'Choose photo from Gallery',
          icon: !this.platform.is('ios') ? 'ios-images-outline' : null,
          handler: () => {
            const type = 'SAVEDPHOTOALBUM';
            this.photo(type);
          }
        }
      ]
    });
    actionSheet.present();
  }

  photo(type) {
    let RegisterServicestep2 = this.RegisterServicestep2;
    const options: CameraOptions = RegisterServicestep2.cameraOptions(this.camera, type);
    this.camera.getPicture(options).then(
      imageData => {
        this.photos = 'data:image/jpeg;base64,' + imageData;
        localStorage.setItem('photo',this.photos)
        this.isUpload = true;
      }
    );
  }
  register(){
    this.RegisterServicestep2.register();
  }
  // onSubmit(form: FormGroup) {
  //   if (form.valid) {
  //     const loader = this.loadingCtrl.create({
  //       content: 'Please wait...'
  //     });
  //     loader.present();
  //     const register_1 = JSON.parse(localStorage.getItem('register_1'));
  //     let data = {
  //       first_name: register_1.first_name,
  //       last_name: register_1.last_name,
  //       email: register_1.email,
  //       password: register_1.password,
  //       estimated_consumption: register_1.grams,
  //       referral_number: register_1.referral_number,
  //       identification_type: form.value.IdType,
  //       identification_image: this.photos,
  //       identification_number: form.value.IdNumber
  //     };

  //     //objectAssign(data, ) , form.value , this.photos);
  //     console.log(data);
  //     this.RegisterProvider.register(data).subscribe(
  //       data => {
  //         if ((data.success = true)) {
  //           console.log(data.message);
  //           loader.dismiss();
  //           this.alertCtrl
  //             .create({
  //               message: data.message,
  //               buttons: ['OK']
  //             })
  //             .present();
  //         } else {
  //           loader.dismiss();
  //           this.alertCtrl
  //             .create({
  //               message: data.message,
  //               buttons: ['OK']
  //             })
  //             .present();
  //         }
  //       },
  //       err => {
  //         loader.dismiss();
  //       }
  //     );
  //   }
  // }
}
