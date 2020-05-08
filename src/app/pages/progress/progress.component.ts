import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [],
})
export class ProgressComponent implements OnInit {
  porcentajeA: number = 65;
  porcentajeB: number = 35;
  constructor() {}

  ngOnInit(): void {}

  // actualizar(event: number) {
  //   console.log('Evento: ', event);
  // }
}
