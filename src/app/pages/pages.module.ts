import { NgModule } from '@angular/core';

// Libreria para graficos
import { ChartsModule } from 'ng2-charts';
// Mis Modulos
import { PipesModule } from '../pipes/pipes.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Mis Rutas
import { PAGES_ROUTES } from './pages.routes';
// Mis Pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
// temporal | Componentes reutilizables
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { StakeholdersComponent } from './stakeholders/stakeholders.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteComponent } from './clientes/cliente.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleados/empleado.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProveedorComponent } from './proveedores/proveedor.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    ProfileComponent,
    UsuariosComponent,
    ModalUploadComponent,
    StakeholdersComponent,
    ClientesComponent,
    ClienteComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    ProveedoresComponent,
    ProveedorComponent,
  ],
  exports: [DashboardComponent, ProgressComponent, Graficas1Component],
  // Acá me traifo mi modulo con modulos compartidos que se usaran en todo lado
  // Finalmente me traigo mi archivo de rutas de PagesModule
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule,
    PipesModule,
    FormsModule, // este import es temporal
    ReactiveFormsModule, // este import es temporal
  ],
})
export class PagesModule {}
