import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //usuario!: Usuario;
  id!: string;
  nombre!: string;

  constructor(private http:AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    //this.usuario = this.http.infoUsuario;
    this.nombre = localStorage.getItem('name') || '';
  }

  homeUsuario(){
    this.router.navigateByUrl('/cliente/productos')
  }

  carritoUsuario(){
    this.router.navigateByUrl('/cliente/carrito')
  }

  historialUsuario(){
    this.router.navigateByUrl('/cliente/historial')
  }

  perfilUsuario(){
    this.router.navigateByUrl('/cliente/perfil')
  }

  logOut(){
    this.http.logOut();
    this.router.navigateByUrl('/login');
  }

}
