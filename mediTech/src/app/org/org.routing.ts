import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { OrgProfileComponent } from './profile/profile.component';
import { OrgDashboardComponent } from './dashboard/dashboard.component';
import { OrgEmployeeComponent } from './employee/employee.component';
import { OrgLabComponent } from './lab/lab.component';
import { OrgDoctorComponent } from './doctor/doctor.component';
import { OrgAgentComponent } from './agent/agent.component';
import { OrgComponent } from './org.component';
import { OrgRepresentativeComponent } from './representative/representative.component';
import { OrgClinicComponent } from './clinic/clinic.component';


const orgRoutes: Routes = [{
    path: 'organization',
    component: OrgComponent,
    
    children: [{
      path: '',
      redirectTo: "dashboard",
      pathMatch: 'full'
    }, {
      path: 'profile',
      component: OrgProfileComponent
    }, {
      path: 'dashboard',
      component: OrgDashboardComponent
    }, {
      path: 'employee',
      component: OrgEmployeeComponent
    }, {
      path: 'lab',
      component: OrgLabComponent
    }, {
      path: 'doctor',
      component: OrgDoctorComponent
    },
    {
        path: 'agent',
        component: OrgAgentComponent
      },
      {
        path: 'representative',
        component: OrgRepresentativeComponent
      },
      {
        path: 'clinic',
        component: OrgClinicComponent
      }
]
  
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(orgRoutes)],
    exports: [RouterModule]
  })
  
  export class OrgRouting { }
  
