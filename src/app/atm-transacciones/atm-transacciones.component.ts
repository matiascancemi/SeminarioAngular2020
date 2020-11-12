import { Component, OnInit } from '@angular/core';
import { CarroService } from '../carro.service';
import { Transacciones } from './transacciones';

@Component({
  selector: 'app-atm-transacciones',
  templateUrl: './atm-transacciones.component.html',
  styleUrls: ['./atm-transacciones.component.scss']
})
export class AtmTransaccionesComponent implements OnInit {

  constructor(private carro: CarroService) {

  }

  transacciones: Transacciones[] =  [
    {
    fecha: new Date(1390272893353),
    moneda: "Dolar",
    valor: 10,
    cantidad: 0,
    imagen: "assets/img/paypal.png",
    activo: true
  },
  {
    fecha: new Date(1390272893353),
    moneda: "Euro",
    valor: 15,
    cantidad: 0,
    imagen: "assets/img/paypal.png",
    activo: true
  },
];

agregarCompra(transaccion): void{
  this.carro.agregarCompra(transaccion);
}

  ngOnInit(): void {
  }


}
