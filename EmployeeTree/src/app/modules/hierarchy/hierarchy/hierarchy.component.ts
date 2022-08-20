import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

var selectedNode : EmployeeNode = {} as EmployeeNode

interface EmployeeNode {
  id: string,
  schedules: any[],
  children: EmployeeNode[],
  first_name : string,
  surname : string,
  username : string
}

@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.scss']
})

export class HierarchyComponent implements OnInit {

  treeControl = new NestedTreeControl<EmployeeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<EmployeeNode>()
  name : string = ""
  id : string   = ""
  selectedNode : EmployeeNode = this.common.user
  
  constructor(private common : CommonService) {
    let superUser = [this.common.user]
    // let superUser.children = this.common.user
    this.dataSource.data = superUser
  }

  hasChild = (_: number, node: EmployeeNode) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
    this.name = this.selectedNode.first_name + " " + this.selectedNode.surname
    this.id = this.common.user.id
  }

  select(node : EmployeeNode) : void{
    this.selectedNode = node
  }
}

