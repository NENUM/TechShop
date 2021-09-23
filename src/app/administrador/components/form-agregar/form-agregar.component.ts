import { Component, OnInit } from '@angular/core';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';
import { Producto } from '../../interfaces/producto.interface';
import { AdministradorServiceService } from '../../services/administrador-service.service';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-form-agregar',
  templateUrl: './form-agregar.component.html',
  styleUrls: ['./form-agregar.component.scss']
})
export class FormAgregarComponent implements OnInit {

  constructor(public ref:DynamicDialogRef, 
              public config: DynamicDialogConfig, 
              private productService: AdministradorServiceService,
              private messageService: MessageService
              ) { }

  ngOnInit(): void {
  }

  producto!: Producto;
  nombre: string = '';
  precio!: number;
  cantidad!: number;
  descripcion: string = '';
  imagen!: File;
  message: boolean = true;

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

  agregarProducto(){
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
      this.messageService.add({
        severity:'warn',
        summary:'Formulario incompleto',
        detail:'Debes diligenciar todos los campos'
      });
      
    }else{
      this.productService.postProductos(producto, imagen!)
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
