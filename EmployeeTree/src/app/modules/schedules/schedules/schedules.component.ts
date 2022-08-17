import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog/dialog.component';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { CommonService } from 'src/app/services/common.service';
import { scheduled } from 'rxjs';

interface EmployeeNode {
  id: string,
  schedules: any[],
  children: EmployeeNode[],
  first_name : string,
  surname : string,
  username : string
}

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {
  selectedNode : EmployeeNode = {} as EmployeeNode
  treeControl = new NestedTreeControl<EmployeeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<EmployeeNode>()

  hasChild = (_: number, node: EmployeeNode) => !!node.children && node.children.length > 0;
  
  constructor(
    public dialog: MatDialog,
    private common : CommonService
    ) {

    let superUser = [this.common.user]
    // let superUser.children = this.common.user
    this.dataSource.data = superUser
   }

  ngOnInit(): void {
    this.selectedNode = this.common.user
    // this.openDialog(null)
  }

  select(node : EmployeeNode) : void {
    this.selectedNode = node
  }

  openDialog(schedule : any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        dataKey : schedule,
        id : this.selectedNode.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      //Fetch new results
      
      console.log(`Dialog result: ${result}`);
    });
  }

  delete(s : any) {
    //Delete schedule item from database, pass employee id and new schedule as param
    this.common.removeScheduleItem(this.selectedNode.id, s)
    
  }

  add() : void {
    this.openDialog(null)
  }
}
