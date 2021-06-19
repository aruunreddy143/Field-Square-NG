import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Route Components
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path:'',redirectTo:'/',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
