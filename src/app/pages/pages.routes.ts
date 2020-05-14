import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
// Guards
import { LoginGuardGuard } from '../services/service.index';
import { ConsultasComponent } from './consultas/consultas.component';

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
        path: 'consultas',
        component: ConsultasComponent,
        data: { titulo: 'Consultas - Controles Empresariales' },
      },
      {
        path: 'promesas',
        component: PromesasComponent,
        data: { titulo: 'Promesas - Controles Empresariales' },
      },
      {
        path: 'rxjs',
        component: RxjsComponent,
        data: { titulo: 'dev RxJs - Controles Empresariales' },
      },
      {
        path: 'account-settings',
        component: AccountSettingsComponent,
        data: { titulo: 'Ajustes - Controles Empresariales' },
      },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },
];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
