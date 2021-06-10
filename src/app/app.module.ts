import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// Material module
import { MaterialModule } from 'src/app/dashboard/material.module';

// Project Components
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
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

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
    MaterialModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    {provide:LocationStrategy, useClass : HashLocationStrategy}
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
