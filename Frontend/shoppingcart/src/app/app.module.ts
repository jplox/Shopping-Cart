import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './MyComponents/landing-page/landing-page.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { RegisterComponent } from './MyComponents/register/register.component';
import { PageNotFoundComponent } from './MyComponents/page-not-found/page-not-found.component';
import { UsercartComponent } from './MyComponents/usercart/usercart.component';
import { MycartComponent } from './MyComponents/usercart/mycart/mycart.component';
import { FiltersComponent } from './MyComponents/usercart/filters/filters.component';
import { ProductslistComponent } from './MyComponents/usercart/productslist/productslist.component';
import { CartIteamsComponent } from './MyComponents/usercart/mycart/cart-iteams/cart-iteams.component';
import { ProductItemsComponent } from './MyComponents/usercart/productslist/product-items/product-items.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    UsercartComponent,
    MycartComponent,
    FiltersComponent,
    ProductslistComponent,
    CartIteamsComponent,
    ProductItemsComponent,
   

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
