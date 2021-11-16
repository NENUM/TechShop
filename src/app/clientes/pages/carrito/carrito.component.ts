import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Carrito } from '../../interfaces/carrito.interface';
import { Order } from '../../interfaces/order.interface';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  constructor(private http: ClienteService) { }
  
  products: Carrito[]=[];
  id!:string;
  acum:number = 1;
  username!:string;
  direccion!:string;

  ngOnInit(): void {
    this.id=localStorage.getItem('id') || '';
    this.username=localStorage.getItem('name')||'';
    this.http.getProductosCarrito(this.id)
      .subscribe(res=>{
        console.log(res);
        this.products = res;
      })
    this.http.getAddress(this.id).subscribe((res)=>{this.direccion=res.address})
  }

  cantidad(id:number, cantidad:number, num:number){
    this.acum=cantidad;
    this.acum+=num;
    cantidad=this.acum;
    const carrito: Carrito={
      idUsuario:this.id,
      idProducto: id,
      cantidad
    }
    console.log(this.acum);
    
    this.http.putProductosCarrito(carrito)
        .subscribe((res)=>{console.log(res)
        })
  }

  eliminar(id:number){
    const carrito:Carrito={
      idUsuario:this.id,
      idProducto:id
    }
    this.http.deleteProductosCarrito(carrito)
        .subscribe((res)=>{
        })
    
  }

  comprar(){
    const order: Order = {
      username: this.username,
      address: this.direccion,
    }
    this.http.postOrder(order).subscribe((res)=>{console.log(res);
    })
  }

  vaciarCarrito(){
    this.products=[];
  }

}
