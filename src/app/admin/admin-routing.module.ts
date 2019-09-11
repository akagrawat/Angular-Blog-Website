import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './dashboard/users/users.component';
import { AdminComponent } from './admin.component';
import { Page404Component } from '../page404/page404.component';

const appRoutes: Routes = [
  {path:'admin', component: AdminComponent,
children: [
    {path:'dashboard', component:DashboardComponent},
    {path:'users', component:UsersComponent},
]},
{path:'**', component: Page404Component}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
