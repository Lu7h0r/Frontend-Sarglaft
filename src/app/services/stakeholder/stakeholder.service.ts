import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import Swal from 'sweetalert2';
import { Stakeholder } from 'src/app/models/stakeholder.model';
@Injectable({
  providedIn: 'root',
})
export class StakeholderService {
  totalStakeholders: number = 0;
  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService
  ) {}

  cargarStakeholders() {
    let url = URL_SERVICES + '/stakeholder';
    return this.http.get(url).map((resp: any) => {
      this.totalStakeholders = resp.total;
      return resp.stakeholders;
    });
  }
  obtenerStakeholder(id: string) {
    let url = URL_SERVICES + '/stakeholder/' + id;
    return this.http.get(url).map((resp: any) => resp.stakeholder);
  }
  borrarStakeholder(id: string) {
    let url = URL_SERVICES + '/stakeholder/' + id;
    url += '?token=' + this._usuarioService.token;
    return this.http.delete(url).map((resp: any) => {
      Swal.fire({
        title: 'StakeHolder Borrado',
        text: 'Se ha eliminado correctamente',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    });
  }
  crearStakeholder(nombre: string) {
    let url = URL_SERVICES + '/stakeholder';
    url += '?token=' + this._usuarioService.token;
    return this.http.post(url, { nombre }).map((resp: any) => resp.stakeholder);
  }
  buscarStakeholder(termino: string) {
    let url = URL_SERVICES + '/busqueda/coleccion/stakeholders/' + termino;
    return this.http.get(url).map((resp: any) => resp.stakeholders);
  }
  actualizarStakeholder(stakeholder: Stakeholder) {
    let url = URL_SERVICES + '/stakeholder/' + stakeholder._id;
    url += '?token=' + this._usuarioService.token;
    return this.http.put(url, stakeholder).map((resp: any) => {
      Swal.fire({
        title: 'StakeHolder Actualizado',
        text: stakeholder.nombre,
        icon: 'success',
        confirmButtonText: 'OK',
      });
      return resp.stakeholder;
    });
  }
}
