import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Transacciones } from './atm-transacciones/transacciones';

@Injectable({
  providedIn: 'root'
})

export class CarroService {

  private _ListaDeCompras: Transacciones[] = [];
  ListaDeCompras : BehaviorSubject<Transacciones[]> = new BehaviorSubject([]);

  constructor() { }

  agregarCompra(transaccion: Transacciones) {
    let item: Transacciones = this._ListaDeCompras.find((v1) => v1.moneda == transaccion.moneda);
    if (!item){
      this._ListaDeCompras.push({ ... transaccion});
    } else {
      item.cantidad += transaccion.cantidad;
      console.log();
    }
    console.log(this._ListaDeCompras);
    this.ListaDeCompras.next(this._ListaDeCompras);
  }

}