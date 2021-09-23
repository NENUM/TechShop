import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../../administrador/interfaces/producto.interface';

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

  postProductosCarrito():Observable<Producto>{
    return this.http.post<Producto>('http://localhost:8080/techshop/web/v1/carrito/producto',{
      headers: this.headerParams
    })
  }

  getProductosCarrito():Observable<Producto[]>{
    console.log(this.headerParams);
    
    return this.http.post<Producto[]>('http://localhost:8080/techshop/web/v1/carrito/producto/1',{
      headers: this.headerParams
    })
  }

}
