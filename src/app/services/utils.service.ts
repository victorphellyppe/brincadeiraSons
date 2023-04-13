import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(public router: Router, public navController: NavController, public modalCtrl: ModalController, public actionSheet: ActionSheetController) { }


  public changeRote(rota: string, params?: any) {
    const navExtras: NavigationExtras = {
      state: {
        params,
      },
    };
    this.router.navigateByUrl(rota, navExtras);
  }

  public otherRote(rota: string, params?: any) {
    const navExtras: NavigationExtras = {
      state: {
        params,
      },
    };
    this.router.navigate([rota], navExtras);
  }

  public loadParams() {
    if (this.router.getCurrentNavigation()?.extras?.state) {
      // return this.router.getCurrentNavigation().extras.state.params;
    }
  }

  public routeBack() {
    this.navController.back();
  }

  public dismissModal() {
    this.modalCtrl.dismiss();
  }
}
