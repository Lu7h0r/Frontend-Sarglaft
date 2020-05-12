import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { FormGroup } from '@angular/forms';

declare function iniciar_plugins();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // asignamos css por ruta => styleUrls:
})
export class LoginComponent implements OnInit {
  // forma: FormGroup;
  constructor(public router: Router) {}

  ngOnInit(): void {
    iniciar_plugins();
  }

  ingresar() {
    console.log('Ingresando...');
    this.router.navigate(['/dashboard']);
  }
}
