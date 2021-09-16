import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Producto } from '../../interfaces/producto.interface';
import { AdministradorServiceService } from '../../services/administrador-service.service';

@Component({
  selector: 'app-form-editar',
  templateUrl: './form-editar.component.html',
  styleUrls: ['./form-editar.component.scss']
})
export class FormEditarComponent implements OnInit {

  constructor(public ref:DynamicDialogRef, 
              public config: DynamicDialogConfig, 
              private productService: AdministradorServiceService) { }

  ngOnInit(): void {
    this.obtenerProductoID();
  }

  producto!: Producto;
  nombre: string = '';
  precio!: number;
  cantidad!: number;
  descripcion: string = '';
  imagen!: string;
  message: boolean = true;
  id = this.config.data;

  obtenerProductoID(){
    this.productService.getProductosID(this.id)
      .subscribe(({nombre, precio, cantidad, descripcion})=>{
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.descripcion = descripcion
      })
  }

  editarProducto(){    
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
      this.productService.putProductos(this.id, producto)
        .subscribe((res)=>{
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
