import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionPedidosComponent } from './pages/gestion-pedidos/gestion-pedidos.component';
import { GestionProductosComponent } from './pages/gestion-productos/gestion-productos.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'pedidos', component:GestionPedidosComponent},
      {path:'productos', component:GestionProductosComponent},
      {path: '**', redirectTo:'productos'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }