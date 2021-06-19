import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Route Components
import {TaskComponent} from './task/task.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {AssetsComponent} from './assets/assets.component';
import {CustomersComponent} from './customers/customers.component';
import {MapComponent} from './map/map.component';
import {DocumentsComponent} from './documents/documents.component';
import {InventoryComponent} from './inventory/inventory.component';
import {ReportsComponent} from './reports/reports.component';
import {DashboardComponent} from "./dashboard.component";

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,
    children: [
      {path: 'task', component: TaskComponent},
      {path: 'schedule', component: ScheduleComponent},
      {path: 'assets', component: AssetsComponent},
      {path: 'customers', component: CustomersComponent},
      {path: 'map', component: MapComponent},
      {path: 'documents', component: DocumentsComponent},
      {path: 'inventory', component: InventoryComponent},
      {path: 'reports', component: ReportsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
