import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor.model';
import { ProveedorService } from 'src/app/services/service.index';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styles: [],
})
export class ProveedoresComponent implements OnInit {
  proveedores: Proveedor[] = [];
  constructor(public _proveedorService: ProveedorService) {}

  ngOnInit() {
    this.cargarProveedores();
  }

  cargarProveedores() {
    this._proveedorService
      .cargarProveedores()
      .subscribe((proveedores) => (this.proveedores = proveedores));
  }
  buscarProveedor(termino: string) {
    if (termino.length <= 0) {
      this.cargarProveedores();
      return;
    }
    this._proveedorService
      .buscarProveedor(termino)
      .subscribe((proveedores: any) => (this.proveedores = proveedores));
  }

  borrarProveedor(proveedor: Proveedor) {
    this._proveedorService
      .borrarProveedor(proveedor._id)
      .subscribe(() => this.cargarProveedores);
  }
}
