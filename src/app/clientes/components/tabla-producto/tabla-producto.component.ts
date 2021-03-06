import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/administrador/interfaces/producto.interface';
import {SelectItem} from 'primeng/api';
import { ClienteService } from '../../services/cliente.service';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-tabla-producto',
  templateUrl: './tabla-producto.component.html',
  styleUrls: ['./tabla-producto.component.scss']
})
export class TablaProductoComponent implements OnInit {

  products: Producto[]=[];
  sortOptions!: SelectItem[];

  sortOrder!: number;

  sortField!: string;

  loading: boolean = false;

  idUser!: string;

  constructor(private productos:ClienteService, public primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.idUser = localStorage.getItem('id') || '';
    this.obtenerProductos();
    this.sortOptions = [
      {label: 'Mayor Precio', value: '!precio'},
      {label: 'Menor Precio', value: 'precio'}
      ];

      this.primengConfig.ripple = true;
  }

  obtenerProductos(){
    this.productos.getProductos()
      .subscribe(res=>
      {this.products = res;
        this.loading = false;
      }
      )
  }

  onSortChange(event:any){
    let value = event.value;
    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
  }
    else {
      this.sortOrder = 1;
      this.sortField = value;
   }
  }

  addCart(id:number){
    console.log(id)
    const carrito ={
      idUsuario: this.idUser,
      idProducto: id,
      cantidad:1
    }
    this.productos.postProductosCarrito(carrito)
      .subscribe((res)=>{
        console.log(res);
        
      })
  }

}
