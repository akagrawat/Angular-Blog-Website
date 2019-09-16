import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './dashboard/users/users.component';
import { AdminComponent } from './admin.component';
import { Page404Component } from '../page404/page404.component';
import { AuthGuard } from '../services/guards/auth-guard.service';
import { RoleGuard } from '../services/guards/role-guard.service';
import { BlogComponent } from './dashboard/blog/blog.component';
const appRoutes: Routes = [
  {
    path: 'admin', component: AdminComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'admin' },
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'blog', component: BlogComponent },
    ]
  },
  { path: '**', component: Page404Component }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
