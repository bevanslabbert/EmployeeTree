import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from 'src/app/services/common.service';

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
  index : number = 0

  constructor(private dialogRef : MatDialogRef<DialogComponent>, private common : CommonService, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    console.log(this.data)
    this.employee = this.data.employee
    this.index = this.data.index
    this.schedule = this.data.dataKey
    this.id = this.data.id
    if(this.schedule != null) {
      this.title = this.schedule.title
      this.description = this.schedule.description
      this.start_time = this.schedule.start_time
      this.end_time = this.schedule.end_time
    }
  
  }

  delete() : void {
    this.scheduleChanged = true

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

  getTimeObject(timeString : string) : any {
    let spaceI = timeString.indexOf(" ")
    let date = timeString.substring(0,spaceI)
    let time = timeString.substring(spaceI + 1)
    return {date : date, time : time}
  }

  getEndTime() : any {
    let spaceI = this.end_time.indexOf(" ")
    let date = this.end_time.substring(0,spaceI)
    let time = this.end_time.substring(spaceI + 1)
    return {date : date, time : time}
  }

  updateScheduleItem() : void {
    if(this.title == "" || this.description == "" || this.start_time == "" || this.end_time == "") {
      
      //Error toast
      alert("Fields cannot be empty")
      this.title = this.schedule.title
      this.description = this.schedule.description
      this.start_time = this.schedule.start_time
      this.end_time = this.schedule.end_time
      return
    }
    var dateRegex = /^\d{4}-\d{1,2}-\d{1,2}$/
    var timeRegex = /^\d{1,2}:\d{2}([ap]m)?$/
    let st = this.getTimeObject(this.start_time)
    let et = this.getTimeObject(this.end_time)

    if(!st.date.match(dateRegex) || !st.time.match(timeRegex))
    {
      alert("Invalid start time format\nFormat the date as YYYY/MM/DD HH/MM or YYYY/MM/DD H/MM, ex. 2022-02-22 8:15")
      return
    }

    if(!et.date.match(dateRegex) || !et.time.match(timeRegex))
    {
      alert("Invalid start time format\nFormat the date as YYYY/MM/DD HH/MM or YYYY/MM/DD H/MM, ex. 2022-02-22 8:15")
      return
    }

    let b = false
    console.log(st)
    console.log(et)
    this.employee.schedules[0].schedule.forEach((element : any) => {
      let elst = this.getTimeObject(element.start_time)
      let elet = this.getTimeObject(element.end_time)
      if(st.date == elst.date)
      {
        //If new item ends in middle of other item
        if(et.time >= elst.time && elet.time >= et.time)
        {
          b = true
        }

        //If new item starts in middle of other item
        if(elst.time <= st.time && st.time <= elet.time)
        {
          b = true
        }
      }
    });

    if(b) {
      
      alert("Overlapping schedule items!")
      return
    }

    let item = {
      title: this.title,
      description: this.description,
      start_time: this.start_time,
      end_time: this.end_time
    }

    //Check if adding item or editing item
    if(this.schedule == null) {     

      //Add to employee.schedules on database passing this.id and item to common service
      this.common.addScheduleItem(this.id, item)
    }
    //Change item locally in employee object and in dataService.user

    //Set to unedited
    // this.scheduleItemChanged[this.i] = false

    this.dialogRef.close({data : item});
  }

  updateSchedule() : void {
    if(this.title == "" || this.description == "" || this.start_time == "" || this.end_time == "") {
      
      //Error toast
      alert("Fields cannot be empty")
      this.title = this.schedule.title
      this.description = this.schedule.description
      this.start_time = this.schedule.start_time
      this.end_time = this.schedule.end_time
      return
    }
    var dateRegex = /^\d{4}-\d{1,2}-\d{1,2}$/
    var timeRegex = /^\d{1,2}:\d{2}([ap]m)?$/
    let st = this.getTimeObject(this.start_time)
    let et = this.getTimeObject(this.end_time)

    if(!st.date.match(dateRegex) || !st.time.match(timeRegex))
    {
      alert("Invalid start time format\nFormat the date as YYYY/MM/DD HH/MM or YYYY/MM/DD H/MM, ex. 2022-02-22 8:15")
      return
    }

    if(!et.date.match(dateRegex) || !et.time.match(timeRegex))
    {
      alert("Invalid start time format\nFormat the date as YYYY/MM/DD HH/MM or YYYY/MM/DD H/MM, ex. 2022-02-22 8:15")
      return
    }

    let b = false
    console.log(st)
    console.log(et)
    this.employee.schedules[0].schedule.forEach((element : any) => {
      let elst = this.getTimeObject(element.start_time)
      let elet = this.getTimeObject(element.end_time)
      if(st.date == elst.date)
      {
        //If new item ends in middle of other item
        if(et.time >= elst.time && elet.time >= et.time)
        {
          b = true
        }

        //If new item starts in middle of other item
        if(elst.time <= st.time && st.time <= elet.time)
        {
          b = true
        }
      }
    });

    if(b) {
      
      alert("Overlapping schedule items!")
      return
    }
    //Change locally in employee and in dataService.user
    // this.employee.schedules[0].schedule.splice(this.index, 1)
    console.log(this.index)
    this.employee.schedules[0].schedule[this.index].title = this.title
    this.employee.schedules[0].schedule[this.index].description = this.description
    this.employee.schedules[0].schedule[this.index].start_time = this.start_time
    this.employee.schedules[0].schedule[this.index].end_time = this.end_time

    console.log(this.employee)

    

    //Commit schedule to database
    this.common.updateSchedule(this.employee)

    //Set to unedited
    this.scheduleChanged = false
    
    let item = {
      title: this.title,
      description: this.description,
      start_time: this.start_time,
      end_time: this.end_time
    }

    this.dialogRef.close({data : item});
  }

  edit() : void {
    this.scheduleChanged = true
  }

}
