import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListEventsPageRoutingModule } from './list-events-routing.module';

import { ListEventsPage } from './list-events.page';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListEventsPageRoutingModule,
    CalendarModule

  ],
  declarations: [ListEventsPage]
})
export class ListEventsPageModule {}
