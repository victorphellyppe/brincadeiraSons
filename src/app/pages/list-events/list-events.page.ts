import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.page.html',
  styleUrls: ['./list-events.page.scss'],
})
export class ListEventsPage implements OnInit {

  listEvents = [];
  constructor(private storageSvc: StorageService, private router: Router) { }

  ngOnInit() {
    this.loadData();
    console.log(this.listEvents);

  }

  async loadData() {
    const data = await this.storageSvc.getData();
    this.listEvents = data;
    console.log(this.listEvents);

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
}
