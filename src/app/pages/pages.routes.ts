import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
// import { PromesasComponent } from './promesas/promesas.component';
// import { RxjsComponent } from './rxjs/rxjs.component';
// Guards
import { LoginGuardGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { StakeholdersComponent } from './stakeholders/stakeholders.component';
import { ClienteComponent } from './clientes/cliente.component';
import { ClientesComponent } from './clientes/clientes.component';
import { EmpleadoComponent } from './empleados/empleado.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ProveedorComponent } from './proveedores/proveedor.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [LoginGuardGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { titulo: 'Dashboard - Controles Empresariales' },
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: { titulo: 'Progreso - Controles Empresariales' },
      },
      {
        path: 'graficas1',
        component: Graficas1Component,
        data: { titulo: 'Reportes - Controles Empresariales' },
      },
      {
        path: 'account-settings',
        component: AccountSettingsComponent,
        data: { titulo: 'Ajustes - Controles Empresariales' },
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: { titulo: 'Mi Cuenta - Controles Empresariales' },
      },
      // CRUDS
      {
        path: 'usuarios',
        component: UsuariosComponent,
        data: { titulo: 'Usuarios - Controles Empresariales' },
      },
      {
        path: 'clientes',
        component: ClientesComponent,
        data: { titulo: 'Clientes - Controles Empresariales' },
      },
      {
        path: 'cliente/:id',
        component: ClienteComponent,
        data: { titulo: 'Actualizar Cliente - Controles Empresariales' },
      },
      {
        path: 'empleados',
        component: EmpleadosComponent,
        data: { titulo: 'Empleados - Controles Empresariales' },
      },
      {
        path: 'empleado/:id',
        component: EmpleadoComponent,
        data: { titulo: 'Actualizar Empleado - Controles Empresariales' },
      },
      {
        path: 'proveedores',
        component: ProveedoresComponent,
        data: { titulo: 'Proveedores - Controles Empresariales' },
      },
      {
        path: 'proveedor/:id',
        component: ProveedorComponent,
        data: { titulo: 'Actualizar Proveedor - Controles Empresariales' },
      },
      {
        path: 'stakeholders',
        component: StakeholdersComponent,
        data: { titulo: 'Stakeholders - Controles Empresariales' },
      },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },
];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
