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
        { titulo: 'ProgressBar', url: '/progress' },
        { titulo: 'Reportes', url: '/graficas1' },
      ],
    },
    {
      titulo: 'Modificar',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        { titulo: 'Usuarios', url: '/usuarios' },
        { titulo: 'StakeHolders', url: '/stakeholders' },
        { titulo: 'Clientes', url: '/clientes' },
        { titulo: 'Empleados', url: '/empleados' },
        { titulo: 'Proveedores', url: '/proveedores' },
      ],
    },
  ];

  constructor() {}
}
