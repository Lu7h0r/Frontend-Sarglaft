import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import Swal from 'sweetalert2';
import { Empleado } from '../../models/empleado.model';
@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  totalEmpleados: number = 0;
  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService
  ) {}

  cargarEmpleados() {
    let url = URL_SERVICES + '/empleado';

    return this.http.get(url).map((resp: any) => {
      this.totalEmpleados = resp.total;
      return resp.empleados;
    });
  }
  buscarEmpleado(termino: string) {
    let url = URL_SERVICES + '/busqueda/coleccion/empleados' + termino;
    return this.http.get(url).map((resp: any) => {
      resp.empleados;
    });
  }
  borrarEmpleado(id: string) {
    let url = URL_SERVICES + '/empleado/' + id;
    url += '?token=' + this._usuarioService.token;

    return this.http.delete(url).map((resp: any) => {
      Swal.fire({
        title: 'Empleado Borrado',
        text: 'Se ha eliminado correctamente',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      return resp;
    });
  }
  guardarEmpleado(empleado: Empleado) {
    let url = URL_SERVICES + '/empleado';
    url += '?token=' + this._usuarioService.token;
    return this.http.post(url, empleado).map((resp: any) => {
      Swal.fire({
        title: 'Empleado Creado',
        text: empleado.nombres,
        icon: 'success',
        confirmButtonText: 'OK',
      });
      return resp.empleado;
    });
  }
}
