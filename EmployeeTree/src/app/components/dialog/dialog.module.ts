import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import {MatChipsModule} from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    ScrollingModule,
    CommonModule,
    MatChipsModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatDialogModule,
    MatDatepickerModule,
    
  ]
})
export class DialogModule { }
