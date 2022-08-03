import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulesRoutingModule } from './schedules-routing.module';
import { SchedulesComponent } from './schedules/schedules.component';


@NgModule({
  declarations: [
    SchedulesComponent
  ],
  imports: [
    CommonModule,
    SchedulesRoutingModule
  ],
  exports: [
    SchedulesComponent
  ]
})
export class SchedulesModule { }
