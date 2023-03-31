import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AccordionComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [AccordionComponent],
})
export class SharedComponentsModule { }
