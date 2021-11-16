import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioRe } from '../../../auth/interfaces/usuario.interface';
import { Direccion } from '../../interfaces/direccion.interface';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: [
  ]
})
export class PerfilComponent implements OnInit {

  username!: string;
  idUsuario!: string;
  optional: boolean=false;

  constructor(private http:ClienteService, private fb: FormBuilder) { }

  formUsuario: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('([a-zA-Z]+) ([a-zA-Z]+)')]],
    username: [''],
    password: ['', [Validators.required, Validators.minLength(8)]],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    enable: [1]
  });

  formDireccion: FormGroup = this.fb.group({
    address: ['', [Validators.required]],
    city: ['', [Validators.required]],
    region: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    idUser: ['']
  });

  ngOnInit(): void {
    this.username = localStorage.getItem('name') || '';
    this.idUsuario = localStorage.getItem('id') || '';
    this.http.getUsuario(this.username)
    .subscribe((res)=>{
      this.formUsuario.reset({
        name: res.name,
        username: this.username,
        email: res.email
      })
    }
    )

    this.http.getAddress(this.idUsuario).subscribe((res)=>{
      if (res) {
        this.optional = true;
      }
      this.formDireccion.reset({
        address:res.address,
        city: res.city,
        region: res.region,
        phone: res.phone,
        idUser: this.idUsuario
      })
    })
    
  }

  get mensajeEmail(): string{
    const errors = this.formUsuario.get('email')?.errors;
    if (errors?.required) {
      return 'Debe ingresar un email'
    }else if(errors?.pattern){
      return 'Debe ingresar un email valido'
    }
    return '';
  }

  get mensajeNombre(): string{
    const errors = this.formUsuario.get('name')?.errors;
    if (errors?.required) {
      return 'Debe ingresar un nombre completo'
    }else if(errors?.pattern){
      return 'Debe ingresar un nombre con formato ej: Jhonatan Joestar'
    }
    return '';
  }

  campoValidado(campo:string){
    return this.formUsuario.get(campo)?.invalid &&
          this.formUsuario.get(campo)?.touched
  }

  actualizarInfo(){
    const usuario:UsuarioRe = this.formUsuario.value;
    console.log(usuario);
    
    this.http.putUsuario(usuario)
          .subscribe((res)=>{
            console.log(res);
            
          })
  }

  agregarDireccion(){
    const direccion:Direccion = this.formDireccion.value;
    direccion.idUser = this.idUsuario;
    console.log(direccion);
    this.http.postAddress(direccion).subscribe((res)=>{console.log(res)
    })
  }

  actualizarDireccion(){
    const direccion:Direccion = this.formDireccion.value;
    direccion.idUser = this.idUsuario;
    console.log(direccion);
    this.http.putAddress(direccion).subscribe((res)=>{console.log(res)
    })
  }

}
