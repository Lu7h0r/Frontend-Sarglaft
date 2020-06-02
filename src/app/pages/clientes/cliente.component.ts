import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClienteService } from '../../services/service.index';
import { Cliente } from 'src/app/models/cliente.model';
import { Stakeholder } from 'src/app/models/stakeholder.model';
import { StakeholderService } from '../../services/service.index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: [],
})
export class ClienteComponent implements OnInit {
  stakeholders: Stakeholder[] = [];
  formaCliente: FormGroup;
  constructor(
    public _clienteService: ClienteService,
    public _stakeHolderService: StakeholderService,
    public router: Router
  ) {}

  ngOnInit() {
    this._stakeHolderService
      .cargarStakeholders()
      .subscribe((stakeholders) => (this.stakeholders = stakeholders));

    this.formaCliente = new FormGroup({
      razonSocial: new FormControl(null, Validators.required),
      nit: new FormControl(null, Validators.required),
      direccion: new FormControl(null, Validators.required),
      telefono: new FormControl(null, Validators.required),
      ciudad: new FormControl(null, Validators.required),
      personaDeContacto: new FormControl(null, Validators.required),
      cargo: new FormControl(null, Validators.required),
      comercial: new FormControl(null, Validators.required),
      correo: new FormControl(null, Validators.required),
      stakeholder: new FormControl(null, Validators.required),
    });
  }

  guardarCliente() {
    // console.log(this.formaCliente.value);

    if (this.formaCliente.invalid) {
      return;
    }

    let cliente = new Cliente(
      this.formaCliente.value.razonSocial,
      this.formaCliente.value.nit,
      this.formaCliente.value.direccion,
      this.formaCliente.value.telefono,
      this.formaCliente.value.ciudad,
      this.formaCliente.value.personaDeContacto,
      this.formaCliente.value.cargo,
      this.formaCliente.value.comercial,
      this.formaCliente.value.correo,
      this.formaCliente.value.stakeholder
    );

    this._clienteService.guardarCliente(cliente).subscribe((resp) => {
      this.router.navigate(['/clientes']);
    });
  }
}
