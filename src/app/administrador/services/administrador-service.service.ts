import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministradorServiceService {

  token: string = '';

  constructor(private http:HttpClient) {
    this.token = localStorage.getItem('token')||'';
   }

  get headerParams(){
    return new HttpHeaders().append('Authorization', 'Bearer '+ this.token)
  }

  postProductos(producto: Producto):Observable<Producto>{
    return this.http.post<Producto>('http://localhost:8080/techshop/web/v1/product/save',producto, {
      headers: this.headerParams
    });
  }

  putProductos(id:number, producto: Producto):Observable<Producto>{
    return this.http.put<Producto>(`http://localhost:8080/techshop/web/v1/product/${id}`,producto, {
      headers: this.headerParams
    });
  }

  getProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>('http://localhost:8080/techshop/web/v1/product',{
      headers: this.headerParams
    })
  }

  getProductosID(id:number):Observable<Producto>{
    return this.http.get<Producto>(`http://localhost:8080/techshop/web/v1/product/${id}`,{
      headers: this.headerParams
    })
  }

  deleteProductos(id:number):Observable<string>{
    return this.http.delete<string>(`http://localhost:8080/techshop/web/v1/product/${id}`,{
      headers: this.headerParams
    })
  }
}
