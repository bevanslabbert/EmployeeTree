import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog/dialog.component';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
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
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {
  
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
    // this.openDialog(null)
  }

  openDialog(node : any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        dataKey : node
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
