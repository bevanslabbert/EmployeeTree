import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HierarchyRoutingModule } from './hierarchy-routing.module';
import { HierarchyComponent } from './hierarchy/hierarchy.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    HierarchyComponent
  ],
  imports: [
    MatIconModule,
    MatTreeModule,
    HeaderModule,
    CommonModule,
    HierarchyRoutingModule
  ],
  exports: [
    HierarchyComponent
  ]
})
export class HierarchyModule { }
