import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  user : any
  employees : any
  schedules : any

  constructor(
    private http: HttpClient
    ) { }

  getEmployees() {
    //Get employees under logged in user
    this.http.post('http://127.0.0.1:3000/api/employees',
    {
      'id' : this.user.id
    })
    .subscribe((employees) =>  {
      
      //Add to children array
      this.user.children = employees

      //Get children recursively
      this.getChildren(this.user.children)
      console.log(this.user)
      
      //get schedule of logged in user
      this.http.post('http://127.0.0.1:3000/api/schedulesById',
      {
        'id' : this.user.id
      })
      .subscribe((schedules) =>  {
        this.user.schedules = schedules
      })
    })
  }

  //get children of array and save it in children array of employee
  getChildren(u : any) {

    //Get schedules of children
    this.getSchedules(u)

    //get details of employees
    this.getEmployeeDetails(u)

    u.forEach((e : any) =>  {
      this.http.post('http://127.0.0.1:3000/api/employees',
      {
        'id' : e.id
      })
      .subscribe((employees) =>  {

        e.children = employees

        this.getChildren(e.children)
        // console.log("CHILDREN OF " + e.id + ": ", e.children)
      })
    })
  }

  //Get schedules of array of employees and save under respective employees
  getSchedules(usersArray : any) {
    // console.log(usersArray)

    usersArray.forEach((e : any) =>  {

      this.http.post('http://127.0.0.1:3000/api/schedulesById',
      {
        'id' : e.id
      })
      .subscribe((schedules) =>  {
        e.schedules = schedules
        // this.getSchedules(e.children)
      })
    })
  }

  //Retrieves user details
  getEmployeeDetails(employeeArray : any) {
    employeeArray.forEach((e : any) =>  {
      this.http.post('http://127.0.0.1:3000/api/employeeDetails',
      {
        'id' : e.id
      })
      .subscribe((emp : any) =>  {
        e.first_name = emp[0].first_name
        e.surname = emp[0].surname
        e.username = emp[0].username
        // console.log(e)
        // this.getSchedules(e.children)
      })
    })
  }

  addScheduleItem(id : string, item : any) : void {
    this.http.post('http://127.0.0.1:3000/api/addScheduleItem',
    {
      id: id,
      item: item
    })
    .subscribe((res)  =>  {

    })
  }

  removeScheduleItem(id : string, item : any) : void {
    this.http.post('http://127.0.0.1:3000/api/removeScheduleItem',
    {
      id: id,
      item: item
    })
    .subscribe((res)  =>  {

    })
  }

  setDialogEmployee(node : any) {
    
  }
  
  setUser(u : any) {
    this.user = u
  }
}
