import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Producto } from '../../interfaces/producto.interface';
import { AdministradorServiceService } from '../../services/administrador-service.service';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-form-editar',
  templateUrl: './form-editar.component.html',
  styleUrls: ['./form-editar.component.scss']
})
export class FormEditarComponent implements OnInit {

  constructor(public ref:DynamicDialogRef, 
              public config: DynamicDialogConfig, 
              private productService: AdministradorServiceService,
              private messageService: MessageService
              ) { }

  ngOnInit(): void {
    this.obtenerProductoID();
  }

  producto!: Producto;
  nombre: string = '';
  precio!: number;
  cantidad!: number;
  descripcion: string = '';
  imagen!: File;
  message: boolean = true;
  id = this.config.data;

  subirArchivo(event:any){
    this.imagen = event.target.files[0];
    if (this.imagen.size>=200000) {
      this.messageService.add({
        severity:'error',
        summary:'Error al cargar el archivo',
        detail:'El tamaño de imagen debe ser menor a 200Kb'
      });
      return;
    }
    console.log('Archivo imagen', this.imagen);
    
  }

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
      imagenUrl: this.nombre,
      imagenId: this.nombre,
      precio : this.precio,
      cantidad : this.cantidad
    }
    const imagen = this.imagen
    if(this.nombre === '' || this.precio === undefined || this.precio <= 0 || this.cantidad === undefined || this.cantidad <= 0 || this.descripcion === '' || imagen.size>=200000 || imagen.size === undefined){
      console.log('Campos vacios')
      
    }else{
      this.productService.putProductos(this.id, producto, imagen)
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
