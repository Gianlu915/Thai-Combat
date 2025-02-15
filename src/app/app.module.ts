import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
<<<<<<< HEAD
=======
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {MatCardModule} from '@angular/material/card';
import { ProductsComponent } from './pages/products/products.component';
import { FlashDealsComponent } from './components/flash-deals/flash-deals.component';
import { BestSellersComponent } from './components/best-sellers/best-sellers.component';
import { TrainingCourseComponent } from './components/training-course/training-course.component';
import { NewsComponent } from './components/news/news.component';
import { TrustUsComponent } from './components/trust-us/trust-us.component';
import { ProductComponent } from './components/product/product.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { KeyFeaturesComponent } from './components/key-features/key-features.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


>>>>>>> homepage

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
<<<<<<< HEAD
    MainBannerComponent
=======
    MainBannerComponent,
    MainSliderComponent,
    ProductsComponent,
    FlashDealsComponent,
    BestSellersComponent,
    TrainingCourseComponent,
    NewsComponent,
    TrustUsComponent,
<<<<<<< HEAD
    ProductComponent
>>>>>>> homepage
=======
    ProductComponent,
    FilterBarComponent,
    CartComponent,
    CheckoutComponent,
    KeyFeaturesComponent,
    ThankYouComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent
>>>>>>> origin/checkout
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule
=======
    HttpClientModule,
    SlickCarouselModule,
    MatCardModule,
    FormsModule
  ],
  providers: [
>>>>>>> homepage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
