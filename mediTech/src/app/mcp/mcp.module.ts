import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { McpRouting } from './mcp.routing';

import { McpHeaderComponent } from './_layout/mcp-header/mcp-header.component';
import { McpMenuComponent } from './_layout/mcp-menu/mcp-menu.component';
import { McpFooterComponent } from './_layout/mcp-footer/mcp-footer.component';
//Pages
import { McpComponent } from './mcp.component';
import { MCPLoginComponent } from './login/login.component';
import { McpCustomerComponent } from './customer/customer.component';
import {CustomerRegistrationComponent} from './customer/registration/registration.component';
import {ReportdoneComponent} from './sms/reportdone/reportdone.component';
import {DoctorsmsComponent} from './sms/doctorsms/doctorsms.component';
// import { NotfoundComponent } from './notfound/notfound.component';
import { McpDashboardComponent} from './dashboard/dashboard.component';
import { CustomerService } from './customer/customer.service';
@NgModule({
  declarations: [
    McpComponent,
    MCPLoginComponent,
    McpHeaderComponent,
    McpMenuComponent,
    McpFooterComponent,
    ReportdoneComponent,
    DoctorsmsComponent,
    McpCustomerComponent,
    CustomerRegistrationComponent,
    McpDashboardComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    McpRouting
    ],
    providers: [CustomerService],
})
export class McpModule { }
