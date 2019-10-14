import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderModule } from '../app/shared/common/common.module';
import { ReactiveFormsModule} from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { ManagerGuard } from './services/guards/manager-guard.service';
import { PostDescriptionComponent } from './post/post-description/post-description.component';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './shared/loader.interceptor';
import { AuthGuard } from './services/guards/auth-guard.service';
import { AdminComponent} from '../app/admin/admin.component';
import { NavigationComponent } from './admin/navigation/navigation.component';


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
    PostDescriptionComponent,
    AdminComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoaderModule,
    DragDropModule
  ],
  providers: [AuthGuard,ManagerGuard,LoaderService,
  { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
    