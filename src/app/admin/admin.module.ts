import { NgModule } from '@angular/core';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { UsersComponent } from '../admin/dashboard/users/users.component';
import { AdminRoutingModule } from '../admin/admin-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AuthGuard } from '../services/guards/auth-guard.service';
import { ReactiveFormsModule} from '@angular/forms';
import { BlogComponent } from './dashboard/blog/blog.component';
import { LoaderModule} from '../shared/common/common.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[
                DashboardComponent,
                UsersComponent,
                BlogComponent],
  imports:[
          ReactiveFormsModule, 
          CommonModule, 
          LoaderModule,
          AdminRoutingModule,
          MDBBootstrapModule.forRoot()],
  providers: [AuthGuard]
})

export class AdminModule{}