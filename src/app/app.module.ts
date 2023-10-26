import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { CartComponent } from './Components/cart/cart.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { ProductsComponent } from './Components/products/products.component';
import { CatrgoriesComponent } from './Components/catrgories/catrgories.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarAuthComponent } from './Components/navbar-auth/navbar-auth.component';
import { NavbarBlankComponent } from './Components/navbar-blank/navbar-blank.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule}from '@angular/common/http';
import { CutingPipe } from './cuting.pipe';
import { ProductDetailsComponent } from './Components/product-details/product-details.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ngx-toastr';
import { PaymentComponent } from './Components/payment/payment.component';
import { AllordersComponent } from './Components/allorders/allorders.component';
import { ForgetpasswordComponent } from './Components/forgetpassword/forgetpassword.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    WishlistComponent,
    ProductsComponent,
    CatrgoriesComponent,
    BrandsComponent,
    RegisterComponent,
    LoginComponent,
    NavbarAuthComponent,
    NavbarBlankComponent,
    FooterComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    NotFoundComponent,
    CutingPipe,
    ProductDetailsComponent,
    PaymentComponent,
    AllordersComponent,
    ForgetpasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
