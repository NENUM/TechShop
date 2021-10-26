import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [
    {
        path:'',
        children:[
            {path: 'productos', component:ProductosComponent},
            {path: 'carrito', component:CarritoComponent},
            {path: 'perfil', component:PerfilComponent},
            {path: '**', redirectTo:'productos'}
        ]
    }
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class ClienteRoutingModule{}