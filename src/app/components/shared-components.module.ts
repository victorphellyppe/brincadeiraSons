import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { MenuComponent } from "./menu/menu.component";
import { PerguntasbiblicasComponent } from "./perguntasbiblicas/perguntasbiblicas.component";
import { PerguntascharadasComponent } from "./perguntascharadas/perguntascharadas.component";
import { PerguntastortanacaraComponent } from "./perguntastortanacara/perguntastortanacara.component";
import { WizardComponent } from "./wizard/wizard.component";
import { MsgComponent } from "./msg/msg.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    MenuComponent,
    PerguntasbiblicasComponent,
    PerguntascharadasComponent,
    PerguntastortanacaraComponent,
    WizardComponent,
    MsgComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MenuComponent,
    PerguntasbiblicasComponent,
    PerguntascharadasComponent,
    PerguntastortanacaraComponent,
    MsgComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class SharedComponentsModule { }
