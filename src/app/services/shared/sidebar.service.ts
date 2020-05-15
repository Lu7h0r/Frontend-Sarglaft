import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo: 'Consultas', url: '/consultas' },
        { titulo: 'Crear Cliente', url: '/crear-cliente' },
        { titulo: 'Crear Proveedor', url: '/crear-proveedor' },
        { titulo: 'ProgressBar', url: '/progress' },
        { titulo: 'Reportes', url: '/graficas1' },
        // { titulo: 'Promesas', url: '/promesas' },
        // { titulo: 'RxJs', url: '/rxjs' },
      ],
    },
  ];

  constructor() {}
}
