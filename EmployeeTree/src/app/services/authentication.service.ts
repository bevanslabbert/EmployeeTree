import { Injectable } from '@angular/core';
import { Observable, of, take, tap } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonService } from './common.service';
// import * as bcrypt from 'bcrypt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user  : any
  employees : any[] = []
  constructor(
    private http : HttpClient,
    private router : Router,
    private commonService : CommonService
  ) { 
    localStorage.removeItem("token")
  }

  login(username : string, password : string){

    this.http.post('http://127.0.0.1:3000/api/login', {
      'username' : username,
      'password' : password 
    })
    .subscribe((user) =>  {
      this.user = user
      
      if(this.user.success)
      {
        localStorage.setItem("token", this.user.username)

        this.commonService.setUser(this.user)
        console.log(this.user)
        this.user = null

        //Fetch all employees that work for this.user
        this.commonService.getEmployees()
        this.router.navigateByUrl("home")
      }
      else
        alert("Invalid credentials")
    })
  }

  logout() : void {
    localStorage.removeItem("token")
  }

  userIsLoggedIn() : boolean {
    if(localStorage.getItem("token") !== null) {
      return true
    }

      return false
  }
}
