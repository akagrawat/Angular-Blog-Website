
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from '../app/admin/admin.module';
import { ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { RecentPostComponent} from './recent-post/recent-post.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppRoutingModule } from '../app/app-routing.module';
import { Page404Component } from './page404/page404.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { ManagerGuard } from './services/guards/manager-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    RecentPostComponent,
    FooterComponent,
    AboutusComponent,
    Page404Component,
    UserProfileComponent,
    HeaderComponent,
    LoginComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ManagerGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
    