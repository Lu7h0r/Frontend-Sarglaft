import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default-dark.css',
    tema: 'default',
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.loadAjustes();
  }

  saveAjustes() {
    // console.log('Guardando Settings en LocalStorage');

    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  loadAjustes() {
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      // console.log('Cargamos los Settings que tengamos en LocalStorage');
      this.setTema(this.ajustes.tema);
    } else {
      this.setTema(this.ajustes.tema);
      // console.log('Traemos valores por defecto que designamos arriba');
    }
  }
  setTema(tema: string) {
    let url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.saveAjustes();
  }
}
interface Ajustes {
  temaUrl: string;
  tema: string;
}
