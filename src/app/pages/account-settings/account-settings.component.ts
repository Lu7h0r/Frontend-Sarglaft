import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [],
})
export class AccountSettingsComponent implements OnInit {
  constructor(public _ajustes: SettingsService) {}

  ngOnInit(): void {}

  cambiarColor(tema: string, link: any) {
    // console.log(link);
    this.setCheck(link);
    this._ajustes.setTema(tema);
  }

  setCheck(link: any) {
    let selectores: any = document.getElementsByClassName('selector');
    let tema = this._ajustes.ajustes.tema;

    for (let ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }
}
