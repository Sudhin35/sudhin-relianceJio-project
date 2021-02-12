import { Component, OnInit, Input } from "@angular/core";
import { ChartDataSets, ChartType, RadialChartOptions } from "chart.js";
import { Label } from "ng2-charts";

@Component({
  selector: "app-radar-chart",
  templateUrl: "./radar-chart.component.html",
  styleUrls: ["./radar-chart.component.css"],
})
export class RadarChartComponent implements OnInit {
  @Input() chartData: Array<any>;
  @Input() chartLabels: Array<any>;

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  radarChartLabels: Label[];

  radarChartData: ChartDataSets[];
  public radarChartType: ChartType = "radar";

  constructor() {}

  ngOnInit() {
    this.radarChartData = [{ data: this.chartData, label: "Popularity" }];
    this.radarChartLabels = this.chartLabels;
  }
}
