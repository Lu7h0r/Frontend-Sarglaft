import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';

import {
  SettingsService,
  SharedService,
  SidebarService,
  UsuarioService,
  LoginGuardGuard,
  SubirArchivoService,
  StakeholdersComponent,
  StakeholderService,
  ClienteService,
  EmpleadoService,
  ProveedorService,
} from './service.index';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    SettingsService,
    SharedService,
    SidebarService,
    UsuarioService,
    LoginGuardGuard,
    SubirArchivoService,
    ModalUploadService,
    StakeholdersComponent,
    StakeholderService,
    ClienteService,
    EmpleadoService,
    ProveedorService,
  ],
})
export class ServiceModule {}
