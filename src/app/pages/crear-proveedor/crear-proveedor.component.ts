import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-proveedor',
  templateUrl: './crear-proveedor.component.html',
  styles: [],
})
export class CrearProveedorComponent implements OnInit {
  fCrearProveedor: FormGroup;

  constructor() {}

  ngOnInit(): void {
    // jalamos todos los campos del formulario

    this.fCrearProveedor = new FormGroup({
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

  crearProveedor() {
    console.log(this.fCrearProveedor.value);
  }
}
