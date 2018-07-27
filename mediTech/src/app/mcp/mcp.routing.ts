import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { McpComponent } from './mcp.component';
import { McpCustomerComponent } from './customer/customer.component';
import {CustomerRegistrationComponent} from './customer/registration/registration.component';
import { McpDashboardComponent} from './dashboard/dashboard.component';
import {ReportdoneComponent} from './sms/reportdone/reportdone.component';
import {DoctorsmsComponent} from './sms/doctorsms/doctorsms.component';
const mastercontrolRoutes: Routes = [{
  path: 'mcp',
  component: McpComponent,
  children: [{
    path: '',
    redirectTo: "dashboard",
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: McpDashboardComponent
  },
  {
    path: 'customer',
    component: McpCustomerComponent
  },
  {
    path: 'customer/registration',
    component: CustomerRegistrationComponent
  },
  {
    path: 'sms/reportdone',
    component: ReportdoneComponent
  },
  {
    path: 'sms/doctorsms',
    component: DoctorsmsComponent
  }
]

}];
@NgModule({
  imports: [RouterModule.forChild(mastercontrolRoutes)],
  exports: [RouterModule]
})

export class McpRouting { }

