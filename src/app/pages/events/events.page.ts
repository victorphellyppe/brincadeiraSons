import { StorageService } from '../../services/storage.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { Events } from '../../interfaces/events';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  @ViewChild(IonDatetime) datetime: IonDatetime;
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  formattedString: any = '';
  evento: Events;
  eventForm: FormGroup;

  constructor(private storageSvc: StorageService, private fb: FormBuilder) {  }
  ngOnInit(): void {
    this.setToday();

    this.eventForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      CPF: ['', [Validators.required, Validators.minLength(11)]],
      childName: ['', [Validators.required]],
      age: ['', [Validators.required]],
      contacts: ['', [Validators.required]],
      email: ['', [Validators.required]],
      dateHour: [this.formattedString, [Validators.required]],
      theme: ['', [Validators.required]],
      location: ['', [Validators.required]],
      addressFest: ['', [Validators.required]],
    })
  }

  setToday() {
    const hoje = new Date();
    const dia = hoje.getDate().toString().padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const ano = hoje.getFullYear();
    const hora = hoje.getHours();
    const minutos = hoje.getMinutes();
    const dataAtual = `${dia}/${mes}/${ano}  ${hora}:${minutos}`;
    this.formattedString = dataAtual;
  }

  modalDateChanged(value) {
    this.dateValue = value;
    this.formattedString = format(parseISO(value), 'dd/MM/yyyy HH:mm');
  }

  async close() {
    await this.datetime.cancel(true);
  }

  async select() {
    await this.datetime.confirm(true);
  }

  submitForm(){
    console.log('SubmitForm');

    const formulario = this.eventForm.value;
    this.storageSvc.addData(formulario);
    formulario.reset();
  }



}

