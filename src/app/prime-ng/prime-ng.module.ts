import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//PrimeNG
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {FileUploadModule} from 'primeng/fileupload';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {TabMenuModule} from 'primeng/tabmenu';
import {ToastModule} from 'primeng/toast';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonModule,
    CardModule,
    DataViewModule,
    DialogModule,
    DropdownModule,
    DynamicDialogModule,
    FileUploadModule,
    InputTextareaModule,
    InputTextModule,
    PanelModule,
    RatingModule,
    RippleModule,
    TabMenuModule,
    ToastModule
  ]
})
export class PrimeNGModule { }
