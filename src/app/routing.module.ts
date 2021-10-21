import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GuardsGuard } from './guards/guards.guard';

const routes: Routes =[
  {
    path:'administrador',
    loadChildren: ()=>import('./administrador/administrador.module').then(m=>m.AdministradorModule),
    // canActivate:[GuardsGuard],
    // canLoad:[GuardsGuard]
  },
  {
    path:'cliente',
    loadChildren: ()=>import('./clientes/clientes.module').then(m=>m.ClientesModule)
  },
  {
    path:'login',
    loadChildren: ()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'**',
    redirectTo: 'cliente'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class RoutingModule { }
