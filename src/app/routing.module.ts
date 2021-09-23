import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GestionProductosComponent } from './administrador/pages/gestion-productos/gestion-productos.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { ProductosComponent } from './clientes/pages/productos/productos.component';
import { CarritoComponent } from './clientes/pages/carrito/carrito.component';

const routes: Routes =[
  {
    path:'',
    component: GestionProductosComponent
  },
  {
    path:'cliente',
    component: ProductosComponent
  },
  {
    path:'carrito',
    component: CarritoComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'**',
    component: GestionProductosComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class RoutingModule { }
