import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'products/category/:categoryName/brand/:brandName', component: ProductsComponent },
  { path: 'products/category/:categoryName', component: ProductsComponent },
  { path: 'products/brand/:brandName', component: ProductsComponent },
  { path: 'products/:productName/:id', component: CartComponent },
  { path: 'products/checkout', component: CheckoutComponent },


  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
