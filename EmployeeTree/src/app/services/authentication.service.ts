import { Injectable } from '@angular/core';
import { Observable, of, take, tap } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
// import * as bcrypt from 'bcrypt';

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

    this.http.post('http://127.0.0.1:3000/api/login', {
      'username' : username,
      'password' : password 
    })
    .pipe(take(5)).subscribe((user) =>  {
      this.user = user
      
      if(this.user.success)
      {
        this.router.navigateByUrl("home")
        localStorage.setItem("token", "token-from-server")

        //Fetch all employees that work for this.user
        
        console.log(this.user)
      }
      else
        alert("Invalid credentials")
    })
  }

  logout() : void {
    localStorage.removeItem("token")
  }

  userIsLoggedIn() : boolean {
    return (localStorage.getItem("token") != null)
  }
}
