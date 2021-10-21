import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
        if (res) {
          this.router.navigateByUrl('/cliente/productos')
        }
      }
      );
  }

}
