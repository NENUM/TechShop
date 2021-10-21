import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    name: ['', [Validators.required]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    email: ['', [Validators.required]],
    enable: [1]
  })

  ngOnInit(): void {
  }

  registrar(){
    const usuario = this.form.value;
    console.log(usuario)
    this.auth.registro(usuario)
    .subscribe((res)=>{
      if(res){
        this.router.navigateByUrl('/login');
      }
    })
  }

}
