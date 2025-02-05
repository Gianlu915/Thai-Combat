import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
<<<<<<< HEAD

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: '**', redirectTo: '' }

=======
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'products/category/:categoryName/brand/:brandName', component: ProductsComponent },
  { path: 'products/category/:categoryName', component: ProductsComponent },
  { path: 'products/brand/:brandName', component: ProductsComponent },

  { path: '**', redirectTo: '' },
>>>>>>> homepage
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
