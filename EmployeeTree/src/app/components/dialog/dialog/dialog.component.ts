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
  i : number = 0
  employee : EmployeeNode = {} as EmployeeNode
  scheduleChanged : boolean = false
  // scheduleItemChanged : boolean[]  = []
  description : string = ""
  title : string = ""
  start_time : string =""
  end_time : string = ""
  id : string = ""
  schedule : any

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    console.log(this.data)
    // this.employee = this.data.dataKey

    this.schedule = this.data.dataKey
    this.id = this.data.id
    if(this.schedule != null) {
      this.title = this.schedule.title
      this.description = this.schedule.description
      this.start_time = this.schedule.start_time
      this.end_time = this.schedule.end_time
    }
    // console.log(this.title)
    // this.scheduleItemChanged = new Array<boolean>(this.employee.schedules[0].schedule.length).fill(false)
  }

  delete() : void {
    this.scheduleChanged = true

    //Remove element from scheduleItemChanged
    // this.scheduleItemChanged.splice(this.i,1)

    this.employee.schedules[0].schedule.splice(this.i,1)
  }

  add() : void {
    //Indicate change in schedule
    this.scheduleChanged = true

    //Add new element to scheduleItem array
    // this.scheduleItemChanged.push(false)

    this.employee.schedules[0].schedule.push({
      "start_time"  : "",
      "end_time"    : "",
      "title"       : "",
      "description" : ""
    })
  }

  updateScheduleItem() : void {
    if(this.title == "" || this.description == "" || this.start_time == "" || this.end_time == "") {
      //Error toast

      return
    }

    //Check if adding item or editing item
    if(this.schedule == null) {
      //Adding new item
      let item = {
        title: this.title,
        description: this.description,
        start_time: this.start_time,
        end_time: this.end_time
      }

      //Add to employee.schedules on database passing this.id and item to common service
      
    }
    //Change item locally in employee object and in dataService.user

    //Commit schedule to database

    //Set to unedited
    // this.scheduleItemChanged[this.i] = false
  }

  updateSchedule() : void {
    //Change locally in employee and in dataService.user

    //Commit schedule to database

    //Set to unedited
    this.scheduleChanged = false
  }

  edit() : void {
    this.scheduleChanged = true
    // console.log("Editing item: ", this.i)
  }

  //Add confirmation popup

  //Add toast

  //Add loading

}
