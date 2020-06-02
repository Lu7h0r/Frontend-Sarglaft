import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import Swal from 'sweetalert2';
import { Cliente } from '../../models/cliente.model';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  totalClientes: number = 0;
  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService
  ) {}

  cargarClientes() {
    let url = URL_SERVICES + '/cliente';

    return this.http.get(url).map((resp: any) => {
      this.totalClientes = resp.total;
      return resp.clientes;
    });
  }
  buscarCliente(termino: string) {
    let url = URL_SERVICES + '/busqueda/coleccion/clientes' + termino;
    return this.http.get(url).map((resp: any) => {
      resp.clientes;
    });
  }
  borrarCliente(id: string) {
    let url = URL_SERVICES + '/cliente/' + id;
    url += '?token=' + this._usuarioService.token;

    return this.http.delete(url).map((resp: any) => {
      Swal.fire({
        title: 'Cliente Borrado',
        text: 'Se ha eliminado correctamente',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      return resp;
    });
  }
  guardarCliente(cliente: Cliente) {
    let url = URL_SERVICES + '/cliente';
    url += '?token=' + this._usuarioService.token;
    return this.http.post(url, cliente).map((resp: any) => {
      Swal.fire({
        title: 'Cliente Creado',
        text: cliente.razonSocial,
        icon: 'success',
        confirmButtonText: 'OK',
      });
      return resp.cliente;
    });
  }
}
