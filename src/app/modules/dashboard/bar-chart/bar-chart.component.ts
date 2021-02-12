import { Component, OnInit, Input } from "@angular/core";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.css"],
})
export class BarChartComponent implements OnInit {
  @Input() chartData: Array<any>;
  @Input() chartLabels: Array<any>;

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[];
  public barChartType: ChartType = "bar";
  public barChartLegend = true;
  public barChartPlugins = [];

  barChartData: ChartDataSets[];

  ngOnInit() {
    this.barChartData = [{ data: this.chartData, label: "Popularity" }];
    this.barChartLabels = this.chartLabels;
  }
}
