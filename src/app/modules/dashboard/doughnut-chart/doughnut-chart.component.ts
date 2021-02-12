import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-doughnut-chart",
  templateUrl: "./doughnut-chart.component.html",
  styleUrls: ["./doughnut-chart.component.css"],
})
export class DoughnutChartComponent implements OnInit {
  @Input() chartData: Array<any>;
  @Input() chartLabels: Array<any>;

  public doughnutColors = [
    {
      backgroundColor: [
        "rgba(110, 114, 20, 1)",
        "rgba(118, 183, 172, 1)",
        "rgba(0, 148, 97, 1)",
        "rgba(129, 78, 40, 1)",
        "rgba(129, 199, 111, 1)",
      ],
    },
  ];
  doughnutChartLabels: string[];
  doughnutChartData: number[];
  chartOptions = {
    responsive: true,
  };

  dateForamt(date: Date) {
    return `${date.getFullYear()}-${
      date.getMonth() - 1
    }-${date.getDate()}\n ${date.getHours()}:${date.getMinutes()} `;
  }

  ngOnInit() {
    this.doughnutChartData = this.chartData;
    this.doughnutChartLabels = this.chartLabels;
  }
}
