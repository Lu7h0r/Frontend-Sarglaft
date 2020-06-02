import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmpleadoService } from '../../services/service.index';
import { Stakeholder } from 'src/app/models/stakeholder.model';
import { StakeholderService } from '../../services/service.index';
import { Router } from '@angular/router';
import { Empleado } from '../../models/empleado.model';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styles: [],
})
export class EmpleadoComponent implements OnInit {
  stakeholders: Stakeholder[] = [];
  formaEmpleado: FormGroup;
  constructor(
    public _empleadoService: EmpleadoService,
    public _stakeHolderService: StakeholderService,
    public router: Router
  ) {}

  ngOnInit() {
    this._stakeHolderService
      .cargarStakeholders()
      .subscribe((stakeholders) => (this.stakeholders = stakeholders));

    this.formaEmpleado = new FormGroup({
      primerApellido: new FormControl(null, Validators.required),
      tipoDeEmpleado: new FormControl(null, Validators.required),
      segundoApellido: new FormControl(null, Validators.required),
      telefono: new FormControl(null, Validators.required),
      nombres: new FormControl(null, Validators.required),
      correo: new FormControl(null, Validators.required),
      tipoDeDocumento: new FormControl(null, Validators.required),
      numeroDocumento: new FormControl(null, Validators.required),
      direccion: new FormControl(null, Validators.required),
      usuarioSolicitud: new FormControl(null, Validators.required),
      stakeholder: new FormControl(null, Validators.required),
    });
  }

  guardarEmpleado() {
    console.log(this.formaEmpleado.value);

    if (this.formaEmpleado.invalid) {
      return;
    }

    let empleado = new Empleado(
      this.formaEmpleado.value.primerApellido,
      this.formaEmpleado.value.tipoDeEmpleado,
      this.formaEmpleado.value.segundoApellido,
      this.formaEmpleado.value.telefono,
      this.formaEmpleado.value.nombres,
      this.formaEmpleado.value.correo,
      this.formaEmpleado.value.tipoDeDocumento,
      this.formaEmpleado.value.numeroDocumento,
      this.formaEmpleado.value.direccion,
      this.formaEmpleado.value.usuarioSolicitud,
      this.formaEmpleado.value.stakeholder
    );

    this._empleadoService.guardarEmpleado(empleado).subscribe((resp) => {
      this.router.navigate(['/empleados']);
    });
  }
}
