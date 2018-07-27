import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//Pages

import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { CustomerModule} from './customer/customer.module';
import { OrgModule} from './org/org.module';
import { McpModule} from './mcp/mcp.module';
// layout 
import { Routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    Routing,
    CustomerModule,
    OrgModule,
    McpModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
