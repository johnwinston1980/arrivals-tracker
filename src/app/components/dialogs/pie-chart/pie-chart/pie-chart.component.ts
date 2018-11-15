import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import * as CanvasJS from '../../../../../assets/canvasjs.min';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  points: any

  constructor(public dialogRef: MatDialogRef<PieChartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.points = data.points      
     }

  ngOnInit() {
    let chart = new CanvasJS.Chart("chart", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title:{
        text: "Hourly Arrivals"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{y}</b>",
        indexLabel: "{name}  {y}",
        dataPoints: this.points
      }]
    });      
    chart.render();     
  }

  onNoClick(): void {
    this.dialogRef.close();    
  }

}