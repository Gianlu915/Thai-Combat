import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {MatCardModule} from '@angular/material/card';
import { ProductsComponent } from './components/product/product.component';
import { FlashDealsComponent } from './components/flash-deals/flash-deals.component';
import { BestSellersComponent } from './components/best-sellers/best-sellers.component';
import { TrainingCourseComponent } from './components/training-course/training-course.component';
import { NewsComponent } from './components/news/news.component';
import { TrustUsComponent } from './components/trust-us/trust-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    MainBannerComponent,
    MainSliderComponent,
    ProductsComponent,
    FlashDealsComponent,
    BestSellersComponent,
    TrainingCourseComponent,
    NewsComponent,
    TrustUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule,
    MatCardModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
