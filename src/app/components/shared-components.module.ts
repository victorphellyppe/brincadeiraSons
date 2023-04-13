import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { PerguntasbiblicasComponent } from "./perguntasbiblicas/perguntasbiblicas.component";
import { PerguntascharadasComponent } from "./perguntascharadas/perguntascharadas.component";
import { PerguntastortanacaraComponent } from "./perguntastortanacara/perguntastortanacara.component";
import { WizardComponent } from "./wizard/wizard.component";
import { MsgComponent } from "./msg/msg.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EventsComponent } from "./events/events.component";


@NgModule({
  declarations: [
    PerguntasbiblicasComponent,
    PerguntascharadasComponent,
    PerguntastortanacaraComponent,
    WizardComponent,
    MsgComponent,
    EventsComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    PerguntasbiblicasComponent,
    PerguntascharadasComponent,
    PerguntastortanacaraComponent,
    MsgComponent,
    EventsComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class SharedComponentsModule { }
