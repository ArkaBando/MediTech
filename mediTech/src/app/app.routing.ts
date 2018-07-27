import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './customer/login/login.component';
import { OrgComponent } from './org/org.component';
import { McpComponent } from './mcp/mcp.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { OrgLoginComponent } from './org/login/login.component';
import { MCPLoginComponent } from './mcp/login/login.component';

const appRoutes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'customer/login', component: LoginComponent },
  { path: 'organization/login', component: OrgLoginComponent },
  { path: 'mcp/login', component: MCPLoginComponent },
  {
    path: 'customer',
    component: CustomerComponent
  },
  { path: 'org', component: OrgComponent },
  { path: 'mcp', component: McpComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  //{ path: '**', component: NotfoundComponent }
];

export const Routing = RouterModule.forRoot(appRoutes);

