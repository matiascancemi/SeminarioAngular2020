import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtmBilleterasComponent } from './atm-billeteras/atm-billeteras.component';
import { AtmTransaccionesComponent } from './atm-transacciones/atm-transacciones.component';
import { AtmUsuariosComponent } from './atm-usuarios/atm-usuarios.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'transacciones',
    pathMatch: 'full'
  },
  { 
    path: 'transacciones', 
    component: AtmTransaccionesComponent 
  },  
  { 
    path: 'usuarios', 
    component: AtmUsuariosComponent 
  },
    { 
    path: 'billeteras', 
    component: AtmBilleterasComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
