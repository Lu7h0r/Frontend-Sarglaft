import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ProveedorService,
  StakeholderService,
} from 'src/app/services/service.index';
import { Stakeholder } from 'src/app/models/stakeholder.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Proveedor } from 'src/app/models/proveedor.model';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styles: [],
})
export class ProveedorComponent implements OnInit {
  stakeholders: Stakeholder[] = [];
  formaProveedor: FormGroup;
  constructor(
    public _proveedorService: ProveedorService,
    public _stakeHolderService: StakeholderService,
    public router: Router
  ) {}

  ngOnInit() {
    this._stakeHolderService
      .cargarStakeholders()
      .subscribe((stakeholders) => (this.stakeholders = stakeholders));

    this.formaProveedor = new FormGroup({
      razonSocial: new FormControl(null, Validators.required),
      nit: new FormControl(null, Validators.required),
      direccion: new FormControl(null, Validators.required),
      ciudad: new FormControl(null, Validators.required),
      telefono: new FormControl(null, Validators.required),
      personaDeContacto: new FormControl(null, Validators.required),
      cargo: new FormControl(null, Validators.required),
      correo: new FormControl(null, Validators.required),
      adjunto: new FormControl(null, Validators.required),
      usuarioSolicitud: new FormControl(null, Validators.required),
      stakeholder: new FormControl(null, Validators.required),
    });
  }

  guardarProveedor() {
    console.log(this.formaProveedor.value);

    if (this.formaProveedor.invalid) {
      return;
    }

    let proveedor = new Proveedor(
      this.formaProveedor.value.razonSocial,
      this.formaProveedor.value.nit,
      this.formaProveedor.value.direccion,
      this.formaProveedor.value.ciudad,
      this.formaProveedor.value.telefono,
      this.formaProveedor.value.personaDeContacto,
      this.formaProveedor.value.cargo,
      this.formaProveedor.value.correo,
      this.formaProveedor.value.adjunto,
      this.formaProveedor.value.usuarioSolicitud,
      this.formaProveedor.value.stakeholder
    );

    this._proveedorService.guardarProveedor(proveedor).subscribe((resp) => {
      this.router.navigate(['/proveedores']);
    });
  }
}
