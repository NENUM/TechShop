import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Orders } from '../../interfaces/order.interface';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {

  username!:string;
  orders!: Orders[];
  constructor(private http: ClienteService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('name') || '';
    this.http.getOrders(this.username).subscribe((res)=>{this.orders = res;})
  }

}
