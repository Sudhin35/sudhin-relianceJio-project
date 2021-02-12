import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardWidgetsComponent } from './dashboard-widgets/dashboard-widgets.component';
import { NgxWidgetGridModule } from 'ngx-widget-grid';
import { AngularMapsComponent } from './angular-maps/angular-maps.component';
import { AgmCoreModule,  GoogleMapsAPIWrapper, MarkerManager} from '@agm/core';
import { MaterialModule } from './../material/material.module';
import { AreaChartComponent } from './area-chart/area-chart.component'
import { ChartsModule ,ThemeService } from 'ng2-charts';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { CombinedChartComponent } from './combined-chart/combined-chart.component';
import { ComponentModule } from './../../component/component.module'
import { ButtonColorDirective } from './../../directives/button-color.directive';


@NgModule({
  declarations: [ButtonColorDirective,DashboardWidgetsComponent, AngularMapsComponent, AreaChartComponent, DoughnutChartComponent, BarChartComponent, PieChartComponent, RadarChartComponent, CombinedChartComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxWidgetGridModule,
    ChartsModule,
    MaterialModule,
    ComponentModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAUnuPXweOavCoI5FlyO5z4UXf_6y74Zfg'
    })
  ],
  providers: [
    GoogleMapsAPIWrapper,
    MarkerManager,
    ThemeService
  ]
})
export class DashboardModule { }
