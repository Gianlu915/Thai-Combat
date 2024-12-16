import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css'
})
export class FilterBarComponent implements OnInit{

  totalProducts: number = 0;
  category: string = '';
  brand: string = '';

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

}
