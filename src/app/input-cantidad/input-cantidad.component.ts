import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Transacciones } from '../atm-transacciones/transacciones';

@Component({
  selector: 'app-input-cantidad',
  templateUrl: './input-cantidad.component.html',
  styleUrls: ['./input-cantidad.component.scss']
})
export class InputCantidadComponent implements OnInit {

  constructor() { }

  @Input() 
  cantidad: number;

  @Input() 
  valor: number;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  multiplicacion: number;


  ngOnInit(): void {
  }

  Restar() :void{
    if (this.cantidad > 0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
      this.Multiplicacion();
      }
  }

  Sumar() :void{
    this.cantidad++;
    this.cantidadChange.emit(this.cantidad);
    this.Multiplicacion();
  }  

  Multiplicacion() :void{
    this.multiplicacion = this.cantidad * this.valor;
  }    

}
