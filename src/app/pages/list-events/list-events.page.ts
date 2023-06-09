import { Events } from './../../interfaces/events';
import { UtilsService } from './../../services/utils.service';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.page.html',
  styleUrls: ['./list-events.page.scss'],
})
export class ListEventsPage implements OnInit {
  /** variaveis globais do calendar */
  dateMulti: string[];
  type: 'string';
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi',
    monthPickerFormat: [
      'JAN',
      `FEV`,
      `MAR`,
      `ABR`,
      `MAI`,
      `JUN`,
      `JUL`,
      `AGO`,
      `SET`,
      `OUT`,
      `NOV`,
      `DEZ`,
    ],
    weekdays: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'],
  };


  listEvents = [];
  constructor(private storageSvc: StorageService, private router: Router, private utilsSvc: UtilsService) { }

  ngOnInit() {
    this.loadData();

  }

  async loadData() {
    const data = await this.storageSvc.getData();
    this.listEvents = data;
    console.log('variavel listEvents', this.listEvents);

  }

  async addData() {
    await this.router.navigateByUrl('/events')
    // this.loadData();
  }

  async removeItem(index) {
    this.storageSvc.removeItem(index);
    this.listEvents.splice(index, 1);
  }


  /** date */
  onChange($event) {
    console.log('On change of event: ', $event);
    console.log($event.format('DD-MM-YYYY'));

  }

  onChangeMonth(event: { newMonth; oldMonth }) {

  }

  openEventDetail(event: Events) {
    console.log(event);

    // const modal = this.utilsSvc.modalCtrl.create({
    //   component: EventDetailComponent,
    //   componentProps: {
    //     events: event
    //   }
    // })
  }


  openEvent(){
    console.log('clickou em openEvent');

  }
}
