import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.css']
})
export class MainBannerComponent implements OnInit {

  bannerItems: { image: string, buttonName: string }[] = [];
  bannerButtons: string[] = ['fairtex', 'leone', 'yokkao'];
 

  constructor(
    private imagesService: ImagesService, 
    private productsService: ProductsService, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.imagesService.getBannerImages().subscribe({
      next: (res) => {
        this.bannerItems = res.map((image, index) => ({
          image: this.imagesService.getFullImageUrl(image),
          buttonName: this.bannerButtons[index] || 'Default' 
        }));
      },
      error: (err) => {
        console.error('Errore nel recupero delle immagini:', err);
      }
    });
  }

}


