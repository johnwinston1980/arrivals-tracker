import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartComponent } from '../pie-chart/pie-chart.component';

import { MatDialogModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule
  ],
  declarations: [ PieChartComponent ],
  entryComponents: [ PieChartComponent ],
})
export class PieChartModule { }
