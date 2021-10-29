import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthServiceService, 
              private fb: FormBuilder, 
              private router:Router) { }

  form: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  ngOnInit(): void {
  }
  
  login(){
    const {username, password} = this.form.value
    this.auth.login(username, password)
      .subscribe(res=>{
        console.log('Esto se imprime',res);
        if (res == 1) {
          this.router.navigateByUrl('/administrador/productos')
        }else if(res>1){
          this.router.navigateByUrl('/cliente/productos')
        }else if(res.error){
          Swal.fire('Error',res.error.error,'error');
        }
      }
      );
  }

  registrar(){
    this.router.navigateByUrl('/registrar')
  }
  

}
