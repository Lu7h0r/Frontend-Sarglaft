import { Component } from '@angular/core';
import { SettingsService } from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'adminpro';
  // Inyectamos el servicio acá por que los settings se cargan desde que carga la app
  constructor(public _ajustes: SettingsService) {}
}
