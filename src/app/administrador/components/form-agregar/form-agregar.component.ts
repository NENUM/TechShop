import { Component, OnInit } from '@angular/core';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';
import { Producto } from '../../interfaces/producto.interface';
import { AdministradorServiceService } from '../../services/administrador-service.service';

@Component({
  selector: 'app-form-agregar',
  templateUrl: './form-agregar.component.html',
  styleUrls: ['./form-agregar.component.scss']
})
export class FormAgregarComponent implements OnInit {

  constructor(public ref:DynamicDialogRef, 
              public config: DynamicDialogConfig, 
              private productService: AdministradorServiceService) { }

  ngOnInit(): void {
  }

  producto!: Producto;
  nombre: string = '';
  precio!: number;
  cantidad!: number;
  descripcion: string = '';
  imagen!: string;
  message: boolean = true;

  agregarProducto(){
    const producto = {
      nombre : this.nombre,
      descripcion : this.descripcion,
      imagen: 'null',
      precio : this.precio,
      cantidad : this.cantidad
    }
    if(this.nombre === '' || this.precio === undefined || this.precio <= 0 || this.cantidad === undefined || this.cantidad <= 0 || this.descripcion === ''){
      console.log('Campos vacios')
      
    }else{
      this.productService.postProductos(producto)
        .subscribe((res)=>{
          console.log('Producto: ',res)
          this.ref.close(res)
        }, 
        (err)=>{
          console.log('Este es el error',err)
          if(err){
            this.ref.close(err)
          }
        });
        
    }
    
  }

  

}
