import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../../administrador/interfaces/producto.interface';
import { Carrito } from '../interfaces/carrito.interface';
import { UsuarioRe } from '../../auth/interfaces/usuario.interface';
import { Direccion } from '../interfaces/direccion.interface';
import { map } from 'rxjs/operators';
import { Order, Orders } from '../interfaces/order.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  token: string='';

  constructor(private http:HttpClient) { 
    this.token = localStorage.getItem('token')||'';
  }

  get headerParams(){
    return new HttpHeaders().append('Authorization', 'Bearer '+ this.token)
  }

  getProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>('http://localhost:8080/techshop/web/v1/product',{
      headers: this.headerParams
    });
  }

  postProductosCarrito(carrito: Carrito):Observable<Carrito>{
    return this.http.post<Carrito>('http://localhost:8080/techshop/web/v1/carrito/producto',carrito,{
      headers: this.headerParams
    })
  }

  getProductosCarrito(id:string):Observable<Carrito[]>{    
    return this.http.get<Carrito[]>(`http://localhost:8080/techshop/web/v1/carrito/producto/${id}`,{
      headers: this.headerParams
    })
  }

  putProductosCarrito(carrito: Carrito):Observable<Carrito>{
    return this.http.put<Carrito>('http://localhost:8080/techshop/web/v1/carrito/producto',carrito,{
      headers: this.headerParams
    })
  }

  deleteProductosCarrito(carrito:Carrito):Observable<Carrito>{
    return this.http.delete<Carrito>('http://localhost:8080/techshop/web/v1/carrito/producto',{
      headers:this.headerParams,
      body: carrito
    })
  }

  postOrder(order:Order){
    return this.http.post<Order>('http://localhost:8080/techshop/web/v1/order/save',order,{
      headers: this.headerParams
    })
  }

  getOrders(username: string){
    return this.http.get<Orders[]>(`http://localhost:8080/techshop/web/v1/shipping/user/${username}`,{
      headers: this.headerParams
    })
  }

  getUsuario(username:string):Observable<UsuarioRe>{
    return this.http.get<UsuarioRe>(`http://localhost:8080/techshop/web/v1/user/${username}`,{
      headers:this.headerParams
    });
  }

  putUsuario(usuario: UsuarioRe):Observable<UsuarioRe>{
    return this.http.put<UsuarioRe>('http://localhost:8080/techshop/web/v1/user/update',usuario,{
      headers:this.headerParams
    });
  }

  getAddress(id: string){
    return this.http.get<Direccion[]>(`http://localhost:8080/techshop/web/v1/address/user/${id}`,{
      headers: this.headerParams
    }).pipe(map((res)=>{return res[0]}))
  }

  postAddress(direccion: Direccion){
    return this.http.post<Direccion>('http://localhost:8080/techshop/web/v1/address/save',direccion,{
      headers: this.headerParams
    })
  }

  putAddress(direccion: Direccion){
    return this.http.put<Direccion>('http://localhost:8080/techshop/web/v1/address/update',direccion,{
      headers: this.headerParams
    })
  }

}
