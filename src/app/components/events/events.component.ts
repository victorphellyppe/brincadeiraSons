import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class EventsComponent implements OnInit {
  @Input() event: any;

  constructor() { }

  ngOnInit() {
    console.log('Um evento: ', this.event);

  }

}
