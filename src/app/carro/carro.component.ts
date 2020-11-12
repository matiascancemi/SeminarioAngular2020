import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Transacciones } from '../atm-transacciones/transacciones';
import { CarroService } from '../carro.service';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.scss']
})
export class CarroComponent implements OnInit {

  ListaDeCompras: Transacciones[] = []; 

  constructor(private carro: CarroService) {
      carro.ListaDeCompras.subscribe(c => this.ListaDeCompras = c);
   }

  ngOnInit(): void {
  }

}
