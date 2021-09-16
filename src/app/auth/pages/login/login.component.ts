import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthServiceService) { }

  ngOnInit(): void {
  }
  res ={
    token: ''
  }
  login(){
    this.auth.login()
      .subscribe(({token})=>{
        localStorage.setItem('token', token);
      });
  }

}
