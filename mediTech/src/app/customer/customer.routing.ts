import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer.component';
import { ProfileComponent } from './profile/profile.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { ReportComponent } from './report/report.component';
import { RaisearequestComponent } from './raisearequest/raisearequest.component';
const customerRoutes: Routes = [{
  path: 'customer',
  component: CustomerComponent,
  children: [{
    path: '',
    redirectTo: "dashboard",
    pathMatch: 'full'
  }, {
    path: 'profile',
    component: ProfileComponent
  }, {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'enquiry',
    component: EnquiryComponent
  },
  {
    path: 'raisearequest',
    component: RaisearequestComponent
  },
   {
    path: 'report',
    component: ReportComponent
  }, {
    path: 'request',
    component: RaisearequestComponent
  }]

}];

@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule]
})

export class CustomerRouting { }
