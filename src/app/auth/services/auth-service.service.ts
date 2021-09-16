import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '../interfaces/token.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  login():Observable<Token>{
    return this.http.post<Token>('http://localhost:8080/techshop/web/v1/authenticate', {username: 'admin', password:'admin'})
  }
}
