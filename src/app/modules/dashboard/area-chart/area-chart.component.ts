import { OnInit, Component, ViewChild, Input } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, Label } from "ng2-charts";

@Component({
  selector: "app-area-chart",
  templateUrl: "./area-chart.component.html",
  styleUrls: ["./area-chart.component.css"],
})
export class AreaChartComponent implements OnInit {
  @Input() chartData: Array<any>;
  @Input() chartLabels: Array<any>;

  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];
  public lineChartOptions: any = {
    responsive: true,
    scales: {
      xAxes: [
        {
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    {
      borderColor: "rgba(255,0,0,0.3)",
      backgroundColor: "rgba(255,0,0,0.3)",
    },
  ];
  public lineChartLegend = true;
  public lineChartType = "line";

  constructor() {}

  ngOnInit() {
    this.lineChartData = [{ data: this.chartData, label: "Popularity" }];
    this.lineChartLabels = this.chartLabels;
  }
}
