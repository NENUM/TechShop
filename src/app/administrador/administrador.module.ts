import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { GestionProductosComponent } from './pages/gestion-productos/gestion-productos.component';
import { GestionPedidosComponent } from './pages/gestion-pedidos/gestion-pedidos.component';
import { FormAgregarComponent } from './components/form-agregar/form-agregar.component';
import { FormsModule } from '@angular/forms';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { FormEditarComponent } from './components/form-editar/form-editar.component';



@NgModule({
  declarations: [
    GestionProductosComponent,
    GestionPedidosComponent,
    FormAgregarComponent,
    ProductTableComponent,
    FormEditarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNGModule
  ]
})
export class AdministradorModule { }
