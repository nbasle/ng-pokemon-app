import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isLoggedIn:boolean = false;
redirectUrl: string;
  login(name:string, password:string):Observable<boolean>{
const isLoggedIn = (name=='pikachu' && password=='pikachu');
return of(isLoggedIn).pipe(delay(1000),tap(isLoggedIn => this.isLoggedIn = isLoggedIn))
  }
  logout(){
this.isLoggedIn = false;
  }
}
