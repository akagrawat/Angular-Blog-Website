import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from '../admin/admin.component';
import { NavigationComponent } from '../admin/navigation/navigation.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { UsersComponent } from '../admin/dashboard/users/users.component';
import { AdminRoutingModule } from '../admin/admin-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AuthGuard } from '../services/guards/auth-guard.service';
import { ReactiveFormsModule} from '@angular/forms';
import { BlogComponent } from './dashboard/blog/blog.component'

@NgModule({
  declarations:[AdminComponent,
                NavigationComponent,
                DashboardComponent,
                UsersComponent,
                BlogComponent],
  imports:[BrowserModule,
    ReactiveFormsModule,  
    AdminRoutingModule,
          MDBBootstrapModule.forRoot()],
  providers: [AuthGuard]
})

export class AdminModule{}