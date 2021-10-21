import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './pages/productos/productos.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { TablaProductoComponent } from './components/tabla-producto/tabla-producto.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { ClienteRoutingModule } from './cliente-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductosComponent,
    CarritoComponent,
    TablaProductoComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule,
    ClienteRoutingModule,
    SharedModule
  ]
})
export class ClientesModule { }
