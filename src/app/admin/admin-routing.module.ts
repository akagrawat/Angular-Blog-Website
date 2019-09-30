import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './dashboard/users/users.component';
import { BlogComponent } from './dashboard/blog/blog.component';
import { ManagerGuard} from '../../app/services/guards/manager-guard.service';
import { CommonModule} from '@angular/common';
const appRoutes: Routes = [
 
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent, canActivate: [ManagerGuard] },
  { path: 'blog', component: BlogComponent },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes )
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
