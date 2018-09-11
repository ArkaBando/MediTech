import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//Pages

import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { CustomerModule} from './customer/customer.module';
import { OrgModule} from './org/org.module';
import { McpModule} from './mcp/mcp.module';
import { HttpClientModule } from '@angular/common/http';
// layout 
import { Routing } from './app.routing';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    Routing,
    HttpClientModule,
    CustomerModule,
    OrgModule,
    McpModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
