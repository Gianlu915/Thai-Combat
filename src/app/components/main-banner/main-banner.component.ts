import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrl: './main-banner.component.css'
})
export class MainBannerComponent implements OnInit {

  bannerImages: string[] = [];

  constructor(private imagesService: ImagesService){}


  ngOnInit(): void {
    this.imagesService.getBannerImages().subscribe({
      next: (res) => {
        console.log('Immagini ricevute:', res);  // Verifica cosa ricevi dal server
        this.bannerImages = res;
      },
      error: (err) => {
        console.error('Errore nel recupero delle immagini:', err);
      }
    });
  }
}
