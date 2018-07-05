import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';

import { AccountPageModule } from '../pages/account/account.module';
import { ForgotPassPageModule } from '../pages/Auth/forgot-pass/forgot-pass.module';
import { LoginPageModule } from '../pages/Auth/login/login.module';
import { RegisterPageModule } from '../pages/Auth/register/register.module';
import { CheckoutPageModule } from '../pages/shop/checkout/checkout.module';
import { ListPageModule } from '../pages/shop/list/list.module';
import { ProductPageModule } from '../pages/shop/product/product.module';
import { ComponentsModule } from '../components/components.module';
import { CheckcodePageModule } from '../pages/Auth/forgot-pass/checkcode/checkcode.module';
import { NewpasswordPageModule } from '../pages/Auth/forgot-pass/newpassword/newpassword.module';


import { CartService } from '../components/cart/cart.service';
import { ApiProvider } from '../providers/api/api';
import { NotificationProvider } from '../providers/notification/notification';
import { Registerstep2PageModule } from '../pages/Auth/register/registerstep2/registerstep2.module';
import { StorageProvider } from '../providers/storage/storage';
import { AuthProvider } from '../providers/auth/auth';



@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    CheckoutPageModule,
    AccountPageModule,
    ForgotPassPageModule,
    LoginPageModule,
    RegisterPageModule,
    ListPageModule,
    HttpModule,
    ProductPageModule,
    Registerstep2PageModule,
    CheckcodePageModule,
    ComponentsModule,
    NewpasswordPageModule,
    IonicModule.forRoot(MyApp, {
      backButtonIcon: 'ios-arrow-back-outline',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition'
    })
  ],

  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    NativePageTransitions,
    Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CartService,
    ApiProvider,
    NotificationProvider,
    StorageProvider,
    AuthProvider
  ]
})
export class AppModule { }
