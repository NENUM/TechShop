import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../auth/services/auth-service.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate, CanLoad {

  constructor(private http:AuthServiceService, private router: Router){}

  canActivate(): Observable<boolean> | boolean {
    return this.http.verificar()
          .pipe(
            tap(res=>{
              if(!res){
                this.router.navigateByUrl('login');
              }
            })
          );
  }
  canLoad(): Observable<boolean> | boolean {
    return this.http.verificar()
          .pipe(
            tap(res=>{
              if(!res){
                this.router.navigateByUrl('login');
              }
            })
          );
  }
}
