import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Usuario, UsuarioRe } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private _usuario!: Usuario;

  constructor(private http: HttpClient) { }

  get infoUsuario(){
    return this._usuario
  }

  verificar():Observable<boolean>{
    const url = "http://localhost:8080/helloadmin"
    const headers = new HttpHeaders()
                          .append('Authorization', 'Bearer '+localStorage.getItem('token'));
    return this.http.get(url,{headers})
              .pipe(
                map(res=>{
                  console.log(res);
                  return true;
                }),
                // catchError(res=>{
                //   console.log(res);
                //   return false;
                // })
              )
  }

  registro(usuario: UsuarioRe){
    return this.http.post<UsuarioRe>('http://localhost:8080/techshop/web/v1/user/save',usuario)
  }

  login(username:string, password: string){
    const body = {username, password}
    return this.http.post<Usuario>('http://localhost:8080/techshop/web/v1/authenticate', body)
            .pipe(
              tap((usuario)=>{
                this._usuario = usuario;
                localStorage.setItem('token',this._usuario.token);
                localStorage.setItem('id',this._usuario.id);
                localStorage.setItem('name',this._usuario.nombre);
                console.log(this._usuario);
                
              }),
              map(res=>{
                console.log('respuesta del map',res);
                
                return res.id
              }),
              catchError(err=>of(err.ok))
            )
      
  }
}
