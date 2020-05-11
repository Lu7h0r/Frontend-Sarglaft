import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function iniciar_plugins();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // asignamos css por ruta => styleUrls:
})
export class LoginComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {
    iniciar_plugins();
  }

  ingresar() {
    console.log('Ingresando...');
    this.router.navigate(['/dashboard']);
  }
}
