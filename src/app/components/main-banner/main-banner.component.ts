import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';
<<<<<<< HEAD
=======
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products.model';
import { ActivatedRoute } from '@angular/router';
>>>>>>> homepage

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.css']
})
export class MainBannerComponent implements OnInit {

  bannerItems: { image: string, buttonName: string }[] = [];
<<<<<<< HEAD
  bannerButtons: string[] = ['Fairtex', 'Yokkao', 'Leone'];

  constructor(private imagesService: ImagesService) {}
=======
  bannerButtons: string[] = ['fairtex', 'leone', 'yokkao'];
 

  constructor(
    private imagesService: ImagesService, 
    private productsService: ProductsService, 
    private route: ActivatedRoute
  ) {}
>>>>>>> homepage

  ngOnInit(): void {
    this.imagesService.getBannerImages().subscribe({
      next: (res) => {
<<<<<<< HEAD
        console.log('Immagini ricevute:', res);
        // Associa ogni immagine al nome del bottone
        this.bannerItems = res.map((image, index) => ({
          image,
          buttonName: this.bannerButtons[index] || 'Default'  // Assegna un nome di bottone di default se non ci sono abbastanza bottoni
=======
        this.bannerItems = res.map((image, index) => ({
          image: this.imagesService.getFullImageUrl(image),
          buttonName: this.bannerButtons[index] || 'Default' 
>>>>>>> homepage
        }));
      },
      error: (err) => {
        console.error('Errore nel recupero delle immagini:', err);
      }
    });
  }
<<<<<<< HEAD
}
=======

}


>>>>>>> homepage
