import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './dashboard/home/home.component';
import { TaskComponent } from './dashboard/task/task.component';
import { ScheduleComponent } from './dashboard/schedule/schedule.component';
import { AssetsComponent } from './dashboard/assets/assets.component';
import { CustomersComponent } from './dashboard/customers/customers.component';
import { MapComponent } from './dashboard/map/map.component';
import { DocumentsComponent } from './dashboard/documents/documents.component';
import { InventoryComponent } from './dashboard/inventory/inventory.component';
import { ReportsComponent } from './dashboard/reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TaskComponent,
    ScheduleComponent,
    AssetsComponent,
    CustomersComponent,
    MapComponent,
    DocumentsComponent,
    InventoryComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
