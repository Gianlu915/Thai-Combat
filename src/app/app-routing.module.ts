import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
<<<<<<< HEAD

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: '**', redirectTo: '' }

=======
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'products/category/:categoryName/brand/:brandName', component: ProductsComponent },
  { path: 'products/category/:categoryName', component: ProductsComponent },
  { path: 'products/brand/:brandName', component: ProductsComponent },
<<<<<<< HEAD

  { path: '**', redirectTo: '' },
>>>>>>> homepage
=======
  { path: 'products/:productName/:id', component: CartComponent },
  { path: 'products/checkout', component: CheckoutComponent },
  { path: 'thank-you', component: ThankYouComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
>>>>>>> origin/checkout
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
