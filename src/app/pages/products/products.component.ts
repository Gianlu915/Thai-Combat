import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(private route: ActivatedRoute, private productsService: ProductsService){}

  category: string = '';
  products: Product[] = [];

  ngOnInit(): void {
    // Ottieni il parametro 'category' dalla rotta
    this.route.paramMap.subscribe(params => {
      // Assegna il parametro 'category' (se esiste) alla variabile 'category'
      this.category = params.get('category') ?? ''; // Se non esiste, assegna una stringa vuota
  
      // Ora carica i prodotti in base alla categoria (se presente)
      this.loadProducts();
    });
  }


  loadProducts():void{
    this.productsService.getAllProducts().subscribe(
      res => {
        if(this.category){
          this.products = res.filter(product => product.category === this.category);
        }else{
          this.products = res;
        }
      },
      err => {
        console.log("errore caricamento dati", err)
      }
    )
  }


}
