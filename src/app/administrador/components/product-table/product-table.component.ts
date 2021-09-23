import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import {SelectItem} from 'primeng/api';
import { AdministradorServiceService } from '../../services/administrador-service.service';
import { DialogService } from 'primeng/dynamicdialog';
import {MessageService} from 'primeng/api';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import { FormEditarComponent } from '../form-editar/form-editar.component';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

  
  products: Producto[]=[];
  sortOptions!: SelectItem[];

  sortOrder!: number;

  sortField!: string;

  ref!: DynamicDialogRef;

  loading: boolean = true;
  constructor(private productos:AdministradorServiceService, 
              public dialogService: DialogService, 
              public messageService: MessageService,
              public primengConfig: PrimeNGConfig) { }

    //Al iniciarse trae los productos y las opciones de filtrado
  ngOnInit(): void {
     this.obtenerProductos();
     this.sortOptions = [
      {label: 'Mayor Precio', value: '!precio'},
      {label: 'Menor Precio', value: 'precio'}
      ];

      this.primengConfig.ripple = true;
  }
  //obtener los productos de la API
  obtenerProductos(){
    this.productos.getProductos()
      .subscribe(res=>
      {this.products = res;
        this.loading = false;
      }
      )
  }
  //Eliminar producto por ID
  eliminarProducto(id:number, imagenId:string){
    this.productos.deleteProductos(id, imagenId)
      .subscribe((res)=>{
        //this.products = this.products.filter(producto=>producto.id!==id);
        console.log(id);
        
      });
    
    this.messageService.clear('c');
  }
  //Mostrar la ventana y mensaje de editar producto
  show(id:number){
    this.ref = this.dialogService.open(FormEditarComponent,{
      header: 'Añadir productos',
      data: id,
      width: '60%',
      contentStyle: {
        "max-height":"500px",
        "overflow":"auto"
      },
      baseZIndex: 10000
    });

    this.ref.onClose.subscribe((product: boolean)=>{
      if(product){
        this.messageService.add({
          severity:'success',
          summary:'Producto editado correctamente',
        });
      }
      //this.obtenerProductos();
    });
  }
  //Metodo de filtrado
  onSortChange(event:any){
    let value = event.value;
    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
  }
  else {
      this.sortOrder = 1;
      this.sortField = value;
  }
  }
  //Ventana para confirmar eliminacion
  showConfirm() {
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'¿Desea eliminar este producto?', detail:'Eliminar este producto'});
  }
  //Metodo para cerar la ventana de eliminacion
  onReject() {
    this.messageService.clear('c');
  } 
  //Destruir el mensaje de editar producto
  ngOnDestroy(): void {
    if(this.ref){
      this.ref.close();
    }
  }

}
