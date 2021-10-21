import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../auth/services/auth-service.service';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate, CanLoad {

  constructor(private http:AuthServiceService){}

  canActivate(): Observable<boolean> | boolean {
    return this.http.verificar()
          .pipe(
            // tap(valid=>{
            //   console.log(valid);
              
            // })
          )
  }
  canLoad(): Observable<boolean> | boolean {
    return true;
  }
}
