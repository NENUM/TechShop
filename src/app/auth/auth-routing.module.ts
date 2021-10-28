import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { RecuperarComponent } from './pages/recuperar/recuperar.component';

const routes: Routes = [
    {
        path:'',
        children:[
            {path:'login', component: LoginComponent},
           {path:'registrar', component:RegistroComponent},
           {path: 'recuperar', component:RecuperarComponent}
        ]
    }
];


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class AuthRoutingModule{}