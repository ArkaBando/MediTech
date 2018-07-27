import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Pages
import { CustomerComponent } from './customer.component';
import { LoginComponent } from './login/login.component';
// import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { ReportComponent } from './report/report.component';
import { RaisearequestComponent } from './raisearequest/raisearequest.component';
// layout
import { CustomerHeaderComponent } from './_layout/customer-header/customer-header.component';
import { CustomerMenuComponent } from './_layout/customer-menu/customer-menu.component';
import { CustomerFooterComponent } from './_layout/customer-footer/customer-footer.component';
import { CustomerRouting } from './customer.routing';
import { DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    CustomerComponent,
    LoginComponent,
    ProfileComponent,
    EnquiryComponent,
    ReportComponent,
    RaisearequestComponent,
    CustomerHeaderComponent,
    CustomerMenuComponent,
    CustomerFooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CustomerRouting
  ],

})
export class CustomerModule { }
