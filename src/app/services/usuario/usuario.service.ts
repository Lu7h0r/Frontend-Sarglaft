import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from 'src/app/config/config';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  usuario: Usuario;
  token: string;
  constructor(
    public http: HttpClient,
    public router: Router,
    public _subirArchivoService: SubirArchivoService
  ) {
    // console.log('Service Users Listo');
    this.cargardeStorage();
  }

  logeado() {
    return this.token.length > 5 ? true : false;
  }

  cargardeStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }

  guardarEnStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario;
    this.token = token;
  }

  logout() {
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this.router.navigate(['/login']);
  }

  login(usuario: Usuario, recordar: boolean = false) {
    if (recordar) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }

    let url = URL_SERVICES + '/login';
    return this.http.post(url, usuario).map((resp: any) => {
      this.guardarEnStorage(resp.id, resp.token, resp.usuario);
      return true;
    });
  }
  crearUsuario(usuario: Usuario) {
    let url = URL_SERVICES + '/usuario';
    return this.http.post(url, usuario);
  }

  actualizarUsuario(usuario: Usuario) {
    let url = URL_SERVICES + '/usuario/' + usuario._id;
    url += '?token=' + this.token;
    // console.log(url);
    return this.http.put(url, usuario).map((resp: any) => {
      // this.usuario = resp.usuario;
      let usuarioDB: Usuario = resp.usuario;
      this.guardarEnStorage(usuarioDB._id, this.token, usuarioDB);
      swal('Usuario actualizado', usuario.nombre, 'success');
    });
  }
  cambiarImagen(archivo: File, id: string) {
    this._subirArchivoService
      .subirArchivo(archivo, 'usuarios', id)
      .then((resp: any) => {
        this.usuario.img = resp.usuario.img;
        swal('Imagen Actualizada', this.usuario.nombre, 'success');
        this.guardarEnStorage(id, this.token, this.usuario);
      })
      .catch((resp) => {
        console.log(resp);
      });
  }
}
