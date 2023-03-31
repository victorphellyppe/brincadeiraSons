import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { MenuController, NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navigate: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menuCtrl: MenuController,
    private navCtrl: NavController
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu() {
    this.navigate = [
      {
        title: 'Home',
        url: '/home',
        icon: 'home',
      },
      {
        title: 'Sons',
        url: '/sons',
        icon: 'chatboxes',
      },
      {
        title: 'Contacts',
        url: '/contacts',
        icon: 'contacts',
      },
    ];
  }

  open(path) {
    const encoded = encodeURIComponent(path);
    this.navCtrl.setDirection('root');
    this.router.navigateByUrl(`/accordion/${encoded}`);
    this.menuCtrl.toggle();
  }
}
