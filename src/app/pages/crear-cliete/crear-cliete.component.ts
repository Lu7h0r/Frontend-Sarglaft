import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-crear-cliete',
  templateUrl: './crear-cliete.component.html',
  styles: [],
})
export class CrearClieteComponent implements OnInit {
  fCrearCliente: FormGroup;

  constructor() {}

  ngOnInit(): void {
    // jalamos todos los campos del formulario

    this.fCrearCliente = new FormGroup({
      razonSocial: new FormControl(null, Validators.required),
      nit: new FormControl(null, Validators.required),
      direccion: new FormControl(null, Validators.required),
      telefono: new FormControl(null, Validators.required),
      ciudad: new FormControl(null, Validators.required),
      personaDeContacto: new FormControl(null, Validators.required),
      cargo: new FormControl(null, Validators.required),
      comercial: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  crearCliente() {
    console.log(this.fCrearCliente.value);
  }
  // fin de class
}
