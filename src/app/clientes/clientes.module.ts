import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './pages/productos/productos.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { TablaProductoComponent } from './components/tabla-producto/tabla-producto.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { ClienteRoutingModule } from './cliente-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HistorialComponent } from './pages/historial/historial.component';



@NgModule({
  declarations: [
    ProductosComponent,
    CarritoComponent,
    TablaProductoComponent,
    PerfilComponent,
    HistorialComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimeNGModule,
    ClienteRoutingModule,
    SharedModule
  ]
})
export class ClientesModule { }
