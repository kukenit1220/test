import { Component, ViewChild } from '@angular/core';
import { LoadingController, Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuController } from 'ionic-angular/components/app/menu-controller';

import { LoginPage } from '../pages/Auth/login/login';
import { ListPage } from '../pages/shop/list/list';
import { AccountPage } from '../pages/account/account';
import { LoginService } from '../pages/Auth/login/login.service';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  public rootPage: any;
  public token: string = '';
  public pages: Array<{ title: string; component: any }>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    public menu: MenuController,
    public _login: LoginService,
    public _auth: AuthProvider,
    public loadingCtrl: LoadingController,

  ) {
    this.initializeApp();
    platform.ready().then(() => {
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this._auth.checkToken(this);
    !this._login ? this.rootPage = LoginPage : false;
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.pages = [
        { title: 'SHOP', component: ListPage },
        { title: 'ORDERS', component: AccountPage },
        { title: 'ADDRESSES', component: AccountPage },
        { title: 'DETAILS', component: AccountPage }
      ];

      this.menu.enable(true, 'menu');

    });
  }

  openPage(pages) {
    localStorage.removeItem('listpage');
    localStorage.removeItem('profile');
    this.nav.setRoot(pages.component, { title: pages.title });
  }

}
