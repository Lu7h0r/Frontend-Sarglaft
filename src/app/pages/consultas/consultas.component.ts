import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

declare function iniciar_plugins();

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styles: [],
})
export class ConsultasComponent implements OnInit {
  fConsulta: FormGroup;

  constructor() {}

  ngOnInit(): void {
    //Cargo jQuery en register
    iniciar_plugins();
    this.fConsulta = new FormGroup({
      usuario: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      tconsulta: new FormControl(null, Validators.required),
      identificador: new FormControl(null, Validators.required),
      idioma: new FormControl(null, Validators.required),
      almacenar: new FormControl(null, Validators.required),
    });
  }

  generarConsulta() {
    console.log(this.fConsulta.value);
  }
}
