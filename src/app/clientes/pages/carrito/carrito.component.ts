import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
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
  acum:number = 1;
  ngOnInit(): void {
    this.id=localStorage.getItem('id') || '';
    this.http.getProductosCarrito(this.id)
      .subscribe(res=>{
        console.log(res);
        this.products = res;
      })
  }

  cantidad(id:number, cantidad:number ,num:number){
    this.acum+=num;
    const carrito: Carrito={
      idUsuario:this.id,
      idProducto: id,
      cantidad: this.acum
    }
    this.http.putProductosCarrito
  }

  eliminar(id:number){
    const carrito:Carrito={
      idUsuario:this.id,
      idProducto:id
    }
    this.http.deleteProductosCarrito(carrito)
        .subscribe((res)=>{
          console.log(res);
          
        })
  }

  vaciarCarrito(){
    this.products=[];
  }

}
