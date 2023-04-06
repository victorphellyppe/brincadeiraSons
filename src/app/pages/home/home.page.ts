import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { ActionPerformed, LocalNotifications, LocalNotificationSchema } from '@capacitor/local-notifications';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonDatetime) datetime: IonDatetime;
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  formattedString: any = '';

  constructor(private alertCtrl: AlertController) {  }
  async ngOnInit() {
    this.setToday();
     // Make sure we are allowed to send notifications!
     await LocalNotifications.checkPermissions();

     // Register your custom action types
     LocalNotifications.registerActionTypes({
       types: [
         {
           id: 'CHAT_MSG',
           actions: [
             {
               id: 'view',
               title: 'Open Chat',
             },
             {
               id: 'remove',
               title: 'Dismiss',
               destructive: true,
             },
             {
               id: 'respond',
               title: 'Respond',
               input: true,
             },
           ],
         },
       ],
     });

     // Received when notification is executed at the scheduled time
     LocalNotifications.addListener(
       'localNotificationReceived',
       (notification: LocalNotificationSchema) => {
         this.presentAlert(
           `Received: ${notification.title}`,
           `Custom Data: ${JSON.stringify(notification.extra)}`
         );
       }
     );

     // Received when a special action button is clicked or notification is tapped
     LocalNotifications.addListener(
       'localNotificationActionPerformed',
       (notification: ActionPerformed) => {
         this.presentAlert(
           `Performed: ${notification.actionId}`,
           `Input value: ${notification.inputValue}`
         );
       }
     );
   }

  setToday() {
    const hoje = new Date();
    const dia = hoje.getDate().toString().padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const ano = hoje.getFullYear();
    const hora = hoje.getHours();
    const minutos = hoje.getMinutes();
    const dataAtual = `${dia}/${mes}/${ano}  ${hora}:${minutos}`;
    this.formattedString = dataAtual;
  }

  modalDateChanged(value) {
    this.dateValue = value;
    this.formattedString = format(parseISO(value), 'dd/MM/yyyy HH:mm');
  }

  async close() {
    await this.datetime.cancel(true);
  }

  async select() {
    await this.datetime.confirm(true);
  }

  async scheduleAdvanced() {
    await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Your Local Notification',
          body: 'Open app for more epic sounds',
          id: 2,
          schedule: { at: new Date(Date.now() + 1000 * 3) },
          sound: 'fanfare.wav',
          smallIcon: 'ic_stat_ionic_logo', // Android only, overrides capacitor.config setting!
          actionTypeId: 'CHAT_MSG',
          extra: {
            custom: 'My custom data object'
          },
          attachments: [
            { id: 'face', url: 'res://public/assets/notif_image.jpg' }
          ],
        }
      ]
    });
  }

  async scheduleBasic() {
    await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Friendly Reminder',
          body: 'Join the Ionic Academy',
          id: 1,
          extra: {
            data: 'Pass data to your handler'
          },
          iconColor: '#00ff00'
        }
      ]
    });
  }


  async presentAlert(header, message) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
