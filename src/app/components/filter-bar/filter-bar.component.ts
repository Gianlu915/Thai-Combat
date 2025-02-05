import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { reduce } from 'rxjs';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css'
})
export class FilterBarComponent implements OnInit{


  totalProducts: number = 0;
  category: string = '';
  brand: string = '';
  price: string = '';
  isDropDownOpen: boolean = true;
  isRotated: boolean =  false;
  showPrices: boolean = false;
  showSizes:boolean = false;
  priceFilters = {
    under50: false,
    '50to100': false,
    over100: false
  };

  constructor(private productsService: ProductsService, private route: ActivatedRoute){}
  ngOnInit() {

    this.route.paramMap.subscribe(paramap => {

      this.category = paramap.get('categoryName') || '';
      this.brand = paramap.get('brandName') || '';

      this.countProducts();
    }

    )
    
  }

  countProducts(){
    this.productsService.getProductCount(this.category, this.brand).subscribe(
      res => {
        this.totalProducts = res;
      },
      err => {
        console.log('errore conteggio dati',err);
      }
    )
  }

  toggleDropDown(): void {
    this.isDropDownOpen = !this.isDropDownOpen;
    this.isRotated = !this.isRotated;
  }


  togglePrices():void {
    this.showPrices = !this.showPrices;
  }

  toggleSizes():void{
    this.showSizes = !this.showSizes;
  }

    // Metodo per gestire il cambiamento dei filtri (checkbox)
    onFilterChange() {
      // Aggiorna il valore dei filtri nel servizio
      this.productsService.setPriceFilters(this.priceFilters);
      console.log(this.priceFilters);
    }

}

