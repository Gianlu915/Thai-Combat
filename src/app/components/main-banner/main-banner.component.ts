import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.css']
})
export class MainBannerComponent implements OnInit {

  bannerItems: { image: string, buttonName: string }[] = [];
  bannerButtons: string[] = ['Fairtex', 'Yokkao', 'Leone'];

  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.imagesService.getBannerImages().subscribe({
      next: (res) => {
        console.log('Immagini ricevute:', res);
        // Associa ogni immagine al nome del bottone e ottieni l'URL completo per l'immagine
        this.bannerItems = res.map((image, index) => ({
          image: this.imagesService.getFullImageUrl(image), // Ottieni l'URL completo
          buttonName: this.bannerButtons[index] || 'Default'  // Assegna un nome di bottone di default se non ci sono abbastanza bottoni
        }));
      },
      error: (err) => {
        console.error('Errore nel recupero delle immagini:', err);
      }
    });
  }
}
