import { Component, OnInit ,Input } from '@angular/core';
import { ChartDataSets,ChartType, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-combined-chart',
  templateUrl: './combined-chart.component.html',
  styleUrls: ['./combined-chart.component.css']
})
export class CombinedChartComponent implements OnInit {

 
  @Input() chartData: Array<any>;
  @Input() chartLabels: Array<any>;


  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
   
      }],
      yAxes: [{
       
      }]
    }
  };
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;

  bubbleChartData: ChartDataSets[] ;
  bubbleChartLabels: Label[];


  constructor() { }

  ngOnInit() {
    this.bubbleChartLabels = this.chartLabels
    this.bubbleChartData =  [
      { data: this.chartData, label: 'Popularity' }
    ]
  }

}
