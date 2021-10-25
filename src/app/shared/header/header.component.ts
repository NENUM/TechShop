import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth/services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //usuario!: Usuario;
  id!: string;
  nombre!: string;

  constructor(private http:AuthServiceService) { }

  ngOnInit(): void {
    //this.usuario = this.http.infoUsuario;
    this.nombre = localStorage.getItem('name') || '';
  }

}
