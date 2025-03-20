import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEditProductComponent } from './components/admin/admin-edit-product/admin-edit-product.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminInsertProductsComponent } from './components/admin/admin-insert-products/admin-insert-products.component';
import { AboutComponent } from './components/panels/about/about.component';
import { HomeComponent } from './components/panels/home/home.component';
import { LoginComponent } from './components/panels/login/login.component';
import { RegisterComponent } from './components/panels/register/register.component';
import { OrderFinishComponent } from './components/user/order-finish/order-finish.component';
import { OrderComponent } from './components/user/order/order.component';
import { CartComponent } from './components/user/shopping/cart/cart.component';
import { ProductsComponent } from './components/user/shopping/products/products.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
     
      {
        path: 'logout',
        component: RegisterComponent,
      },
      // {
      //   path: 'user-home',
      //   component: UserHomeComponent,

      // }
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'products/cart',
        component: CartComponent
      },
      {
        path: 'order-finish',
        component: OrderFinishComponent
      },
      // {
      //   path: 'order',
      //   component: OrderComponent
      // },
      //  {
      //   path: 'admin',
      //   component: AdminHomeComponent
      // },
      //  {
      //   path: 'addproduct',
      //   component: AdminInsertProductsComponent
      // },


    ]
  },

  {
    path: 'user-home',
    component: UserHomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
      },
      {
        path: '',
        component: ProductsComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'order',
        component: OrderComponent
      },
      {
        path: 'admin',
        component: AdminHomeComponent
      },
     

    ]
  },
  {
    path: 'admin',
    component: AdminHomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'admin-home',
        pathMatch: 'full'
      },
      // {
      //   path: '',
      //   component: AdminHomeComponent
      // },
      {
        path: 'addproduct',
        component: AdminInsertProductsComponent
      },
      {
        path: 'admin',
        component: AdminHomeComponent
      },
      {
        path: 'edit',
        component: AdminEditProductComponent
      },
    
    ]
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },


  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
