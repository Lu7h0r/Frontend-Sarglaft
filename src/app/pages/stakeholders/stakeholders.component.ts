import { Component, OnInit } from '@angular/core';
import { ModalUploadService } from 'src/app/components/modal-upload/modal-upload.service';
import { StakeholderService } from '../../services/stakeholder/stakeholder.service';
import { Stakeholder } from 'src/app/models/stakeholder.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stakeholders',
  templateUrl: './stakeholders.component.html',
  styles: [],
})
export class StakeholdersComponent implements OnInit {
  stakeholders: Stakeholder[] = [];

  constructor(
    public _stakeHolderService: StakeholderService,
    public _modalUploadService: ModalUploadService
  ) {}

  ngOnInit() {
    this.cargarStakeholders();

    this._modalUploadService.notificacion.subscribe(() =>
      this.cargarStakeholders()
    );
  }

  buscarStakeholder(termino: string) {
    if (termino.length <= 0) {
      this.cargarStakeholders();
      return;
    }

    this._stakeHolderService
      .buscarStakeholder(termino)
      .subscribe((stakeholders: any) => (this.stakeholders = stakeholders));
  }

  cargarStakeholders() {
    this._stakeHolderService
      .cargarStakeholders()
      .subscribe((stakeholders: any) => (this.stakeholders = stakeholders));
  }

  guardarStakeholder(stakeholder: Stakeholder) {
    this._stakeHolderService.actualizarStakeholder(stakeholder).subscribe();
  }

  borrarStakeholder(stakeholder: Stakeholder) {
    this._stakeHolderService
      .borrarStakeholder(stakeholder._id)
      .subscribe(() => this.cargarStakeholders());
  }

  crearStakeholder() {
    // const { value: valor } = Swal.fire({
    //   title: 'Crear Stakeholder',
    //   input: 'text',
    //   icon: 'info',
    //   showCancelButton: false,
    //   confirmButtonColor: '#3085d6',
    //   confirmButtonText: 'Crear StakeHolder',
    // }).then((valor: string) => {
    //   if (!valor || valor.length === 0) {
    //     return;
    //   }
    //   this._stakeHolderService
    //     .crearStakeholder(valor)
    //     .subscribe(() => this.cargarStakeholders());
    // });
  }

  actualizarImagen(stakeholder: Stakeholder) {
    this._modalUploadService.mostrarModal('stakeholders', stakeholder._id);
  }
}
