import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './MyComponents/landing-page/landing-page.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { PageNotFoundComponent } from './MyComponents/page-not-found/page-not-found.component';
import { RegisterComponent } from './MyComponents/register/register.component';
import { UsercartComponent } from './MyComponents/usercart/usercart.component';


const routes: Routes = [
  {path:"" , component:LandingPageComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"usercart", component:UsercartComponent},
  { path: '**', component:PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
