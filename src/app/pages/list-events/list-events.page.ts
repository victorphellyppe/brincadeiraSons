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
  eventList = new Subject();



  listEvents = [];
  constructor(private storageSvc: StorageService, private router: Router) { }

  ngOnInit() {
    // this.loadData();
  }

  async loadData() {
    const data = await this.storageSvc.getData();
    this.listEvents = data;
    console.log('variavel listEvents', this.listEvents);

  }

  async addData() {
    await this.router.navigateByUrl('/events')
    // await this.storageSvc.addData(`Simon ${Math.floor(Math.random() * 100)}`);
    // this.loadData();
  }

  async removeItem(index) {
    this.storageSvc.removeItem(index);
    this.listEvents.splice(index, 1);
  }


  /** date */
  onChange($event) {
    console.log($event);
  }

  onChangeMonth(event: { newMonth; oldMonth }) {

  }
}
