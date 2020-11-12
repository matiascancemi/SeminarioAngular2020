import { Time } from '@angular/common';

export interface Transacciones{
    fecha: Date;
    moneda: string;
    valor: number;
    cantidad: number;
    imagen: string;
    activo: boolean;
}