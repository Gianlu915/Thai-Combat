import { Component } from '@angular/core';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrl: './main-slider.component.css'
})
export class MainSliderComponent {

  slides = [
    {img: "assets/images/TIGER_FAMILY-_yokkao-1.webp"},
    {img: "assets/images/web_banner_-_dragon_-_small_d107129c-c619-40ec-9d62-759931a2611a.webp"},
    {img: "assets/images/original_-_banner_-_detail-desktop.webp"},
    {img: "assets/images/Yokkao_-_LATE_SHOW_-_banner_-_desktop.webp"}
  ];

  sliderConfig = {
    infinite: true,          
    slidesToShow: 1,         
    slidesToScroll: 1,       
    autoplay: true, 
    autoplaySpeed: 4000,              
    dots: false,              
    responsive: [            
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,   
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

}
