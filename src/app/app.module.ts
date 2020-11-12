import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { AtmTransaccionesComponent } from './atm-transacciones/atm-transacciones.component';
import { AtmBilleterasComponent } from './atm-billeteras/atm-billeteras.component';
import { AtmUsuariosComponent } from './atm-usuarios/atm-usuarios.component';
import { InputCantidadComponent } from './input-cantidad/input-cantidad.component';
import { CarroComponent } from './carro/carro.component';

@NgModule({
  declarations: [
    AppComponent,
    AtmTransaccionesComponent,
    AtmBilleterasComponent,
    AtmUsuariosComponent,
    InputCantidadComponent,
    CarroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
