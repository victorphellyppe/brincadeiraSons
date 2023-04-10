import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    public toastCtrl: ToastController,
  ) { }

  async showToast(message, cssClass?, duration?) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration,
      cssClass,
      buttons: [
        {
          text: "Ok",
          role: "cancel",
        },
      ],
    });
    toast.present();
  }

  async presentToast(message: string, cssClass?, duration = 3000, buttons?) {
    const toast = await this.toastCtrl.create({
      message,
      cssClass: cssClass ?? '',
      duration,
      buttons
    });
    toast.present();
  }


}
