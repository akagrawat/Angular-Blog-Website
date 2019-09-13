import { NgModule } from '@angular/core';
import{ RouterModule, Routes } from '@angular/router'
import { RecentPostComponent } from './recent-post/recent-post.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';

const appRoutes: Routes = [
  {path:'', component: RecentPostComponent},
  {path:'home', component: RecentPostComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'profile', component: UserProfileComponent},
  {path:'login', component: LoginComponent},
  {path:'404', component: Page404Component},
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
