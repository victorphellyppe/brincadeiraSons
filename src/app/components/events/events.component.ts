import { StorageService } from './../../services/storage.service';
import { UtilsService } from './../../services/utils.service';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class EventsComponent implements OnInit {
  @Input() event: any;
  @Input() index: any;
  listEvents = [];

  constructor(public storageSvc: StorageService) { }

  ngOnInit() {
    console.log('Um evento: ');
    console.log(this.event);
  }
  async removeItem(index) {
    this.storageSvc.removeItem(index);
    this.event.splice(index, 1);
  }
  async loadData() {
    const data = await this.storageSvc.getData();
    this.listEvents = data;
    console.log('variavel listEvents', this.listEvents);

  }
}
