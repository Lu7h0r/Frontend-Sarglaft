import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado.model';
import { EmpleadoService } from 'src/app/services/service.index';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styles: [],
})
export class EmpleadosComponent implements OnInit {
  empleados: Empleado[] = [];
  constructor(public _empleadoService: EmpleadoService) {}

  ngOnInit() {
    this.cargarEmpleados();
  }

  cargarEmpleados() {
    this._empleadoService
      .cargarEmpleados()
      .subscribe((empleados) => (this.empleados = empleados));
  }
  buscarEmpleado(termino: string) {
    if (termino.length <= 0) {
      this.cargarEmpleados();
      return;
    }
    this._empleadoService
      .buscarEmpleado(termino)
      .subscribe((empleados: any) => (this.empleados = empleados));
  }

  borrarEmpleado(empleado: Empleado) {
    this._empleadoService
      .borrarEmpleado(empleado._id)
      .subscribe(() => this.cargarEmpleados);
  }
}
