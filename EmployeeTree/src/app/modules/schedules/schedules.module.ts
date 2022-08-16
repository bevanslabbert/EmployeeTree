import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulesRoutingModule } from './schedules-routing.module';
import { SchedulesComponent } from './schedules/schedules.component';

import {MatDialogModule} from '@angular/material/dialog';
import { DialogModule } from 'src/app/components/dialog/dialog.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
// import { DialogComponent } from 'src/app/components/dialog/dialog/dialog.component';

@NgModule({
  declarations: [
    SchedulesComponent
  ],
  imports: [
    MatIconModule,
    MatTreeModule,
    CommonModule,
    SchedulesRoutingModule,
    MatDialogModule,
    DialogModule,
    // DialogComponent
  ],
  exports: [
    SchedulesComponent
  ]
})
export class SchedulesModule { }
