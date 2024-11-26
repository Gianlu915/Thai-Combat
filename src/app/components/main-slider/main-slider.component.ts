import { Component } from '@angular/core';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrl: './main-slider.component.css'
})
export class MainSliderComponent {

  slides = [
    {img: "assets/images/TIGER_FAMILY-_yokkao-1.webp"},
    {img: "assets/images/2020_04_chisiamo_kerman_1387.jpg"},
    {img: "assets/images/original_-_banner_-_detail-desktop.webp"},
    {img: "assets/images/Ferrari-Fairtex-ONE.webp"}
  ];

  sliderConfig = {
    infinite: true,          // Ciclo infinito
    slidesToShow: 1,         // Numero di slide da mostrare alla volta
    slidesToScroll: 1,       // Numero di slide da scrollare alla volta
    autoplay: true,          // Autoplay attivo
    autoplaySpeed: 1000,     // Velocità autoplay in millisecondi
    arrows: true,            // Mostra frecce di navigazione
    dots: true,              // Mostra i puntini di navigazione
    responsive: [            // Configurazione responsiva per diverse dimensioni di schermo
      {
        breakpoint: 1024,    // Per schermi con larghezza >= 1024px
        settings: {
          slidesToShow: 1,   // Mostra 2 slide
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,     // Per schermi con larghezza >= 600px
        settings: {
          slidesToShow: 1,   // Mostra 1 slide
          slidesToScroll: 1
        }
      }
    ]
  };

}
