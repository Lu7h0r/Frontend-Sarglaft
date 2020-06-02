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
        // { titulo: 'ProgressBar', url: '/progress' },
        { titulo: 'Reportes', url: '/graficas1' },
      ],
    },
    {
      titulo: 'Ver',
      icono: 'mdi mdi-eye',
      submenu: [
        // { titulo: 'Consultas', url: '/consutar' },
        // { titulo: 'Ver Usuarios', url: '/usuarios' },
        { titulo: 'Ver Clientes', url: '/clientes' },
        { titulo: 'Ver Empleados', url: '/empleados' },
        { titulo: 'Ver Proveedores', url: '/proveedores' },
      ],
    },
    {
      titulo: 'Crear',
      icono: 'mdi mdi-wrench',
      submenu: [
        { titulo: 'Crear cliente', url: '/cliente/nuevo' },
        { titulo: 'Crear empleado', url: '/empleado/nuevo' },
        { titulo: 'Crear proveedor', url: '/proveedor/nuevo' },
      ],
    },
    {
      titulo: 'Permisos',
      icono: 'mdi mdi-account-key',
      submenu: [{ titulo: 'Editar usuario', url: '/usuarios' }],
    },
  ];

  constructor() {}
}
