import { Component, OnInit } from '@angular/core';
import {DialogService} from 'primeng/dynamicdialog';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {MenuItem} from 'primeng/api';
import { FormAgregarComponent } from '../../components/form-agregar/form-agregar.component';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.scss'],
  providers: [DialogService, MessageService]
})
export class GestionProductosComponent implements OnInit {

  constructor(public dialogService: DialogService, public messageService: MessageService) { }

  items!: MenuItem[];
  ref!: DynamicDialogRef;

  ngOnInit(): void {
    this.items=[
      {
        label: 'Inicio', 
        icon:'pi pi-fw pi-home'
      },
      {
        label: 'Preguntas', 
        icon:'pi pi-fw pi-question'
      },
      {
        label: 'Pedidos', 
        icon:'pi pi-fw pi-wallet'
      },
    ]
  }


  show(){
    this.ref = this.dialogService.open(FormAgregarComponent,{
      header: 'Añadir productos',
      width: '60%',
      contentStyle: {
        "max-height":"500px",
        "overflow":"auto"
      },
      baseZIndex: 10000
    });

    this.ref.onClose.subscribe((product: Boolean)=>{
      console.log('gestion: ',typeof product)
      // console.log('gestion la weada: ', product.ok)

      if(product){
        this.messageService.add({
          severity:'success',
          summary:'Producto agregregado correctamente',
        });
      }
      
      // if(!product.ok){
      //   this.messageService.add({
      //     severity:'error',
      //     summary:'Error el producto no se agrego correctamente',
      //     detail:'Problemas con el servidor'
      //   });

      // }
    });
  }

  ngOnDestroy(): void {
    if(this.ref){
      this.ref.close();
    }
  }
}
