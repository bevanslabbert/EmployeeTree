import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.scss']
})
export class HierarchyComponent implements OnInit {

  name : string = ""
  id : string   = ""
  constructor(private common : CommonService) { }

  ngOnInit(): void {
    this.name = this.common.user.name + " " + this.common.user.surname
    this.id = this.common.user.id
  }

}
