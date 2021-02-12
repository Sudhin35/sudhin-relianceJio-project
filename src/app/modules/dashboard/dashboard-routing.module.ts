
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardWidgetsComponent } from './dashboard-widgets/dashboard-widgets.component';

const routes: Routes = [
    { path: '', component: DashboardWidgetsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
