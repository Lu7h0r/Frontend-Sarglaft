import { NgModule } from '@angular/core';
// Mis Modulos
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
// Mis Rutas
import { PAGES_ROUTES } from './pages.routes';
// Mis Pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
  ],
  exports: [DashboardComponent, ProgressComponent, Graficas1Component],
  // Acá me traifo mi modulo con modulos compartidos que se usaran en todo lado
  // Finalmente me traigo mi archivo de rutas de PagesModule
  imports: [SharedModule, PAGES_ROUTES],
})
export class PagesModule {}
