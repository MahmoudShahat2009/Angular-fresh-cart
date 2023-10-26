import { ForgetpasswordComponent } from './Components/forgetpassword/forgetpassword.component';
import { AllordersComponent } from './Components/allorders/allorders.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { authGuard } from './GUARDS/auth.guard';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { ProductsComponent } from './Components/products/products.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { CatrgoriesComponent } from './Components/catrgories/catrgories.component';
import { CartComponent } from './Components/cart/cart.component';
import { HomeComponent } from './Components/home/home.component';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: BlankLayoutComponent, children: [
      { path: "", redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', canActivate: [authGuard], component: HomeComponent },
      { path: 'details/:id', canActivate: [authGuard], component: ProductDetailsComponent },
      { path: 'cart', canActivate: [authGuard], component: CartComponent },
      { path: 'categories', canActivate: [authGuard], component: CatrgoriesComponent },
      { path: 'brands', canActivate: [authGuard], component: BrandsComponent },
      { path: 'products', canActivate: [authGuard], component: ProductsComponent },
      { path: 'wishlist', canActivate: [authGuard], component: WishlistComponent },
      { path: 'payment/:id', canActivate: [authGuard], component: PaymentComponent },
      { path: 'allorders', canActivate: [authGuard], component: AllordersComponent }
    ]
  },
  {
    path: '', component: AuthLayoutComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgetpassword', component: ForgetpasswordComponent },
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
