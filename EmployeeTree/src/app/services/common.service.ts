import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  user : any
  employees : any

  constructor(
    private http: HttpClient
    ) { }

  getEmployees() {
    this.http.post('http://127.0.0.1:3000/api/employees',
    {
      'id' : this.user.id
    })
    .pipe().subscribe((employees) =>  {
      this.employees = employees
      console.log(this.employees)
    })
  }

  setUser(u : any) {
    this.user = u
  }
}
