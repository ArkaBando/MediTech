import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Pages
import { OrgComponent } from './org.component';
import { OrgLoginComponent } from './login/login.component';
import { OrgProfileComponent } from './profile/profile.component';
import { OrgDashboardComponent } from './dashboard/dashboard.component';
import { OrgEmployeeComponent } from './employee/employee.component';
import { OrgLabComponent } from './lab/lab.component';
import { OrgDoctorComponent } from './doctor/doctor.component';
import { OrgAgentComponent } from './agent/agent.component';
import { OrgRepresentativeComponent } from './representative/representative.component';
import { OrgClinicComponent } from './clinic/clinic.component';
// layout
import { OrgHeaderComponent } from './_layout/org-header/org-header.component';
import { OrgMenuComponent } from './_layout/org-menu/org-menu.component';
import {OrgFooterComponent } from './_layout/org-footer/org-footer.component';

// import { NotfoundComponent } from './notfound/notfound.component';
import { OrgRouting } from './org.routing';
@NgModule({
  declarations: [
    OrgComponent,
    OrgLoginComponent,
    OrgProfileComponent,
    OrgDashboardComponent,
    OrgEmployeeComponent,
    OrgLabComponent,
    OrgDoctorComponent,
    OrgAgentComponent,
    OrgRepresentativeComponent,
    OrgClinicComponent,
    OrgHeaderComponent,
    OrgFooterComponent,
    OrgMenuComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    OrgRouting
    ],

})
export class OrgModule { }
