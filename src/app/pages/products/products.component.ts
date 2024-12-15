import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  category: string = '';
  brand: string = '';
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // Recupera i parametri dalla rotta
      this.category = params.get('categoryName') ?? '';
      this.brand = params.get('brandName') ?? ''; 

      this.loadProducts();
   
    });
}

loadProducts():void{

  if (!this.productsService.isValidCategory(this.category) && !this.productsService.isValidBrand(this.brand)) {
    console.log('Categoria o brand non validi');
      this.products = [];
    return;
  }

  this.productsService.getFilteredProducts(this.category,this.brand).subscribe(

    res => {
    this.products = res;
    },
    err => {
      console.log('errore caricamento dati', err)
    }

  )};

  
      
  
  }
