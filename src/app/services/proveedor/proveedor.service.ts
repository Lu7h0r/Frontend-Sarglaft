import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from 'src/app/config/config';
import { UsuarioService } from '../service.index';
import { Proveedor } from '../../models/proveedor.model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class ProveedorService {
  totalProveedores: number = 0;
  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService
  ) {}

  cargarProveedores() {
    let url = URL_SERVICES + '/proveedor';

    return this.http.get(url).map((resp: any) => {
      this.totalProveedores = resp.total;
      return resp.proveedores;
    });
  }
  buscarProveedor(termino: string) {
    let url = URL_SERVICES + '/busqueda/coleccion/proveedores' + termino;
    return this.http.get(url).map((resp: any) => {
      resp.proveedores;
    });
  }
  borrarProveedor(id: string) {
    let url = URL_SERVICES + '/proveedor/' + id;
    url += '?token=' + this._usuarioService.token;

    return this.http.delete(url).map((resp: any) => {
      Swal.fire({
        title: 'Proveedor Borrado',
        text: 'Se ha eliminado correctamente',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      return resp;
    });
  }
  guardarProveedor(proveedor: Proveedor) {
    let url = URL_SERVICES + '/proveedor';
    url += '?token=' + this._usuarioService.token;
    return this.http.post(url, proveedor).map((resp: any) => {
      Swal.fire({
        title: 'Proveedor Creado',
        text: proveedor.razonSocial,
        icon: 'success',
        confirmButtonText: 'OK',
      });
      return resp.proveedor;
    });
  }
}
