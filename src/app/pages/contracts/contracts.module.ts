
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContractsPageRoutingModule } from './contracts-routing.module';

import { ContractsPage } from './contracts.page';
import { BrMaskerModule } from 'br-mask';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ContractsPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrMaskerModule,

  ],
  declarations: [ContractsPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class ContractsPageModule {}
