import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.css']
})
export class BestSellersComponent implements OnInit {
  bestSellerProducts: Product[] = [];

  // Configurazione per ngx-slick-carousel
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3000,
    infinite: true,
    arrows: true,
    dots: true,
    centerMode: false, // Disabilita la modalità centrata per evitare spazi extra
    variableWidth: false, 
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getBestSellers().subscribe(
      (data) => {
        this.bestSellerProducts = data;
      },
      (error) => {
        console.error('Errore nel caricamento dei prodotti:', error);
      }
    );
  }
}
