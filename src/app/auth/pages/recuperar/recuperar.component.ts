import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styles: [
  ]
})
export class RecuperarComponent implements OnInit {

  constructor(private auth: AuthServiceService, private fb:FormBuilder) { }

  form: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
  })

  ngOnInit(): void {
  }

  enviarCorreo(){
    this.auth.recuperar(this.form.value.username)
        .subscribe((res)=>{
          console.log(res);
        })
    
  }

}
