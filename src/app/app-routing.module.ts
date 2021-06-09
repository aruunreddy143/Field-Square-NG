import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Route Components
import {TaskComponent} from './dashboard/task/task.component';
import {ScheduleComponent} from './dashboard/schedule/schedule.component';
import {AssetsComponent} from './dashboard/assets/assets.component';
import {CustomersComponent} from './dashboard/customers/customers.component';
import {MapComponent} from './dashboard/map/map.component';
import {DocumentsComponent} from './dashboard/documents/documents.component';
import {InventoryComponent} from './dashboard/inventory/inventory.component';
import {ReportsComponent} from './dashboard/reports/reports.component';
import {LoginComponent} from './login/login.component'


const routes: Routes = [
  {path: 'task', component:TaskComponent},
  {path: 'schedule', component:ScheduleComponent},
  {path: 'assets', component:AssetsComponent},
  {path: 'customers', component:CustomersComponent},
  {path: 'map', component:MapComponent},
  {path: 'documents', component:DocumentsComponent},
  {path: 'inventory', component:InventoryComponent},
  {path: 'reports', component:ReportsComponent},
  {path: 'login', component:LoginComponent},
  {path:'',redirectTo:'/',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
