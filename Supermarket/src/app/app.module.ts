import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/panels/login/login.component';

import { RegisterComponent } from './components/panels/register/register.component';
import { AboutComponent } from './components/panels/about/about.component';
import { HomeComponent } from './components/panels/home/home.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';
import { CartComponent } from './components/user/shopping/cart/cart.component';
import { ProductsComponent } from './components/user/shopping/products/products.component';
import { FilterPipe } from './shared/filter.pipe';
import { OrderComponent } from './components/user/order/order.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminInsertProductsComponent } from './components/admin/admin-insert-products/admin-insert-products.component';
import { AdminEditProductComponent } from './components/admin/admin-edit-product/admin-edit-product.component';
import { OrderFinishComponent } from './components/user/order-finish/order-finish.component';
import { MainComponent } from './components/panels/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    HomeComponent,
    UserHomeComponent,
    CartComponent,
    ProductsComponent,
    FilterPipe,
    OrderComponent,
    AdminHomeComponent,
    AdminInsertProductsComponent,
    AdminEditProductComponent,
    OrderFinishComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
