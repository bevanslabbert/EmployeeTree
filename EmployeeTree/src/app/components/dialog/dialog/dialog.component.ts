import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface EmployeeNode {
  id: string,
  schedules: any[],
  children: EmployeeNode[],
  first_name : string,
  surname : string,
  username : string
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  employee : EmployeeNode = {} as EmployeeNode
  scheduleChanged : boolean = false
  scheduleItemChanged : boolean[]  = []
  description : string = ""
  title : string = ""
  start_time : string =""
  end_time : string = ""

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    console.log(this.data)
    this.employee = this.data.dataKey
    console.log(this.title)
    this.scheduleItemChanged = new Array<boolean>(this.employee.schedules[0].schedule.length).fill(false)
  }

  delete(i : number) : void {
    console.log(i)
    this.scheduleChanged = true

    //Remove element from scheduleItemChanged
    this.scheduleItemChanged.splice(i,1)

    this.employee.schedules[0].schedule.splice(i,1)
  }

  add() : void {
    //Indicate change in schedule
    this.scheduleChanged = true

    //Add new element to scheduleItem array
    this.scheduleItemChanged.push(false)

    this.employee.schedules[0].schedule.push({
      "start_time"  : "",
      "end_time"    : "",
      "title"       : "",
      "description" : ""
    })
  }

  updateScheduleItem(i : number) : void {
    //Change item locally in employee object and in dataService.user

    //Commit schedule to database

    //Set to unedited
    this.scheduleItemChanged[i] = false
  }

  updateSchedule() : void {
    //Change locally in employee and in dataService.user

    //Commit schedule to database

    //Set to unedited
    this.scheduleChanged = false
  }

  edit(i : number) : void {
    console.log("Editing item: ", i)
  }

  //Add confirmation popup

  //Add toast

  //Add loading

}
