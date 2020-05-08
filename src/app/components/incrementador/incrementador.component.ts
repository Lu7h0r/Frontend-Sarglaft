import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('inputValue') inputValue: ElementRef;
  @Input('titulo') leyenda: string = 'tDefault';
  // mostraria por defecto tDefault, pero si recibimos desde el componente padre, cambiara.
  @Input() porcentaje: number = 50;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Valor por Default', this.leyenda);
    // console.log('Porcentaje', this.porcentaje);
  }

  ngOnInit(): void {}

  onChanges(newValue: number) {
    // let barraA: any = document.getElementsByName('barraA')[0];
    // console.log(barraA.value);
    if (newValue >= 100) {
      this.porcentaje = 100;
    } else if (newValue <= 0) {
      this.porcentaje = 0;
    } else {
      // barraA.value = Number(this.porcentaje);
      // this.cambioValor.emit(this.porcentaje);
      this.porcentaje = newValue;
    }
    this.inputValue.nativeElement.value = this.porcentaje;
    this.cambioValor.emit(this.porcentaje);
  }

  cambiarValor(valor: number) {
    if (this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }

    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }

    this.porcentaje = this.porcentaje + valor;
    // Acá asignamos los valores que vienen del otro componente por medio de nuestro EventEmitter
    this.cambioValor.emit(this.porcentaje);
    // Ponemos el foco sobre el elemento seleccionado
    this.inputValue.nativeElement.focus();
  }
}
