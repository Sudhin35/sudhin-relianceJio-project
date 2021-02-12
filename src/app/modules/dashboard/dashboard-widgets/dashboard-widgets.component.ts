import { Component, OnInit, OnDestroy } from "@angular/core";
import { ExcelSheetDataService } from "./../../../services/excel-sheet-data.service";
import { DashboardService } from "./../../../services/dashboard.service";
import { SnackbarService } from "./../../../services/snackbar.service";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-dashboard-widgets",
  templateUrl: "./dashboard-widgets.component.html",
  styleUrls: ["./dashboard-widgets.component.css"],
})
export class DashboardWidgetsComponent implements OnInit, OnDestroy {
  country = "India";
  mySubscription: any;
  locationData;
  chartLabels = [];
  chartData = [];
  exportSampleData = [];
  loading = false;

  constructor(
    private excelDataService: ExcelSheetDataService,
    private dashboardService: DashboardService,
    private router: Router,
    private snackbarService: SnackbarService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });
  }

  ngOnInit() {
    this.snackbarService.openSnackBar("Welcome Test!");
    this.getLanguagesByCountry();
  }

  onWidgetChange(event: any) {
    console.log(event);
  }

  onFileChange(event) {
    this.loading = true;
    this.excelDataService.uploadedExcelData(event);
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }

  getLanguagesByCountry() {
    this.loading = true;
    this.chartLabels = [];
    this.chartData = [];
    this.dashboardService.getLanguages(this.country).subscribe(
      (res: any) => {
        this.locationData = res;
        for (let element of this.locationData) {
          this.chartLabels.push(element.language);
          this.chartData.push(element.popularity);
        }

        this.loading = false;
      },
      (error) => {
        this.snackbarService.openSnackBar(error);
      }
    );
  }

  exportSampleSheet() {
    this.exportSampleData = [];
    for (var i = 0; i < this.locationData.length; i++) {
      this.exportSampleData.push(this.locationData[i]);
    }
    this.excelDataService.exportAsExcelFile(
      this.exportSampleData,
      "SampleExcel"
    );
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }
}
