import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [],
})
export class DashboardComponent implements OnInit {
  graficos: any = {
    grafico1: {
      labels: ['Totales', 'Este Mes', 'Esta Semana'],
      data: [37, 37, 11],
      type: 'doughnut',
      leyenda: 'Grafico por Mes',
    },
    grafico2: {
      labels: ['Totales', 'al Service'],
      data: [37, 16],
      type: 'doughnut',
      leyenda: 'Usuarios Consultados',
    },
    grafico3: {
      labels: ['Almacenado', 'Service'],
      data: [95, 5],
      type: 'doughnut',
      leyenda: 'Consultas del Aplicativo',
    },
    grafico4: {
      labels: ['Bajo', 'Alto'],
      data: [85, 15],
      type: 'doughnut',
      leyenda: 'Consumo de recursos',
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
