import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(private auth: AuthServiceService,
              private fb: FormBuilder,
              private router: Router
              ) { }

  form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('([a-zA-Z]+) ([a-zA-Z]+)')]],
    username: ['', [Validators.required, Validators.minLength(8)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    enable: [1]
  })

  ngOnInit(): void {
  }

  get mensajeEmail(): string{
    const errors = this.form.get('email')?.errors;
    if (errors?.required) {
      return 'Debe ingresar un email'
    }else if(errors?.pattern){
      return 'Debe ingresar un email valido'
    }
    return '';
  }

  get mensajeNombre(): string{
    const errors = this.form.get('name')?.errors;
    if (errors?.required) {
      return 'Debe ingresar un nombre completo'
    }else if(errors?.pattern){
      return 'Debe ingresar un nombre con formato ej: Jhonatan Joestar'
    }
    return '';
  }

  get mensajeUsuario(): string{
    const errors = this.form.get('username')?.errors;
    if (errors?.required) {
      return 'Debe ingresar un usuario'
    }else if(errors?.minLength){
      return 'El usuario debe ser minimo de 8 caracteres'
    }
    return '';
  }

  campoValidado(campo:string){
    return this.form.get(campo)?.invalid &&
          this.form.get(campo)?.touched
  }

  registrar(){
    const usuario = this.form.value;
    this.form.markAllAsTouched();
    this.auth.registro(usuario)
    .subscribe(res=>{
      console.log('respuesta',res);
      
      if(res){
        Swal.fire('Registrado','Usuario registrado con exito','success');
        this.router.navigateByUrl('/login');
      }else{
        Swal.fire('Error','El usuario ingresado ya se encuentra registrado','error');
      }
    })
  }

}
