import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Producto } from '../../../administrador/interfaces/producto.interface';
import { Carrito } from '../../interfaces/carrito.interface';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  constructor(private http: ClienteService) { }
  
  products: Carrito[]=[];
  id!:string;
  ngOnInit(): void {
    this.id=localStorage.getItem('id') || '';
    this.http.getProductosCarrito(this.id)
      .subscribe(res=>{
        console.log(res);
        this.products = res;
      })
  }




}
