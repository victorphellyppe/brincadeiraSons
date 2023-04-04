import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
})
export class WizardComponent implements OnInit {
  eventoForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.eventoForm = this.fb.group({
      fullName: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      date: ['', Validators.required],
      tema: ['', Validators.required],
      endereco: ['', Validators.required],
      local: ['', Validators.required],
      chegada: ['', Validators.required],
      saida: ['', Validators.required],
    });
  }

}
