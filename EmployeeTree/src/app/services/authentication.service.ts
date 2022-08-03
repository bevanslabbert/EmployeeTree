import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  username : string = "username"
  password : string = "password"
  constructor() { 
    localStorage.removeItem("token")
  }

  login(username : string, password : string) : Observable<boolean>{

    if(username == this.username && password == this.password) {
      localStorage.setItem("token", "token-from-server")
      return of(true)
    }
    else {
      return of(false)
    }
  }

  logout() : void {
    localStorage.removeItem("token")
  }

  userIsLoggedIn() : boolean {
    return (localStorage.getItem("token") != null)
  }
}
