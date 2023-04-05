import { StorageService } from '../../services/storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.page.html',
  styleUrls: ['./list-events.page.scss'],
})
export class ListEventsPage implements OnInit {

  listEvents = [];
  constructor(private storageSvc: StorageService) { }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    const data = await this.storageSvc.getData();
    this.listEvents = data;
    console.log(this.listEvents);

  }

  async addData() {
    await this.storageSvc.addData(`Simon ${Math.floor(Math.random() * 100)}`);
    this.loadData();
  }

  async removeItem(index) {
    this.storageSvc.removeItem(index);
    this.listEvents.splice(index, 1);
  }
}
