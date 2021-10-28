import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecuperarComponent } from './pages/recuperar/recuperar.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    RecuperarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    PrimeNGModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
