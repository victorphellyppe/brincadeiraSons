import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonDatetime) datetime: IonDatetime;
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  formattedString: any = '';

  constructor() {  }
  ngOnInit(): void {
    this.setToday();
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
}
