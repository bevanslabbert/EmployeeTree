import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HierarchyRoutingModule } from './hierarchy-routing.module';
import { HierarchyComponent } from './hierarchy/hierarchy.component';
import { HeaderModule } from 'src/app/components/header/header.module';


@NgModule({
  declarations: [
    HierarchyComponent
  ],
  imports: [
    HeaderModule,
    CommonModule,
    HierarchyRoutingModule
  ],
  exports: [
    HierarchyComponent
  ]
})
export class HierarchyModule { }
