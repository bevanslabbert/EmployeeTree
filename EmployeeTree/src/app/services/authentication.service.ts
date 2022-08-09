import { Injectable } from '@angular/core';
import { Observable, of, take, tap } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user  : any
  constructor(
    private http : HttpClient,
    private router : Router
  ) { 
    localStorage.removeItem("token")
  }

  login(username : string, password : string){

    // const headers = new HttpHeaders()
    // .set('Content-Type', 'application/json');

    this.http.post('http://127.0.0.1:3000/api/login', {
      'username' : username,
      'password' : password 
    }).pipe(take(5)).subscribe((username) =>  {
      this.user = username
      console.log(this.user)

      if(this.user != null)
      {
        if(password == this.user.password)
        {
          this.router.navigateByUrl("home")
          localStorage.setItem("token", "token-from-server")
        }
        else
        alert("Invalid credentials")
      }
      else
        alert("Invalid credentials")

    })
  }
    // if(username == this.username && password == this.password) {
    //   localStorage.setItem("token", "token-from-server")
    //   return of(true)
    // }
    // else {
    //   return of(false)
    // }

  logout() : void {
    localStorage.removeItem("token")
  }

  userIsLoggedIn() : boolean {
    return (localStorage.getItem("token") != null)
  }
}
