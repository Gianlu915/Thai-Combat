import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service'; 
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];  // Variabile per salvare i prodotti

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    // Chiama il servizio per ottenere i prodotti
    this.productsService.getAllProducts().subscribe(
      (data) => {
        this.products = data;  // Assegna i prodotti ricevuti alla variabile
      },
      (error) => {
        console.error('Errore nel caricamento dei prodotti:', error);  // Gestisci eventuali errori
      }
    );
  }

}
