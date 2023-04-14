import { Component } from '@angular/core';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navigate : any;
  constructor(private platform    : Platform,
              private splashScreen: SplashScreen,
              private statusBar   : StatusBar
              )
  {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Home",
        url   : "/home",
        icon  : "home"
      },
      {
        title : "Brincadeira dos sons",
        url   : "/sons",
        icon  : "musical-note-outline"
      },
      // {
      //   title : "Agendar evento",
      //   url   : "/events",
      //   icon  : "balloon-outline"
      // },
      {
        title : "Todos os eventos",
        url   : "/list-events",
        icon  : "balloon-outline"
      },
      {
        title: "Gerar contrato",
        url: "/contracts",
        icon: "document-outline"
      }
    ]
  }
}
