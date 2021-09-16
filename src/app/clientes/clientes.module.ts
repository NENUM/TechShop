import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './pages/productos/productos.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { TablaProductoComponent } from './components/tabla-producto/tabla-producto.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    ProductosComponent,
    CarritoComponent,
    TablaProductoComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule
  ]
})
export class ClientesModule { }
