import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // per ottenere l'id dalla route
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  product!: Product;
  errorMessage: string = '';
  quantity: number = 1;
  size: boolean = false;
  addToCart: boolean = false;


  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Ottieni l'id del prodotto dalla route
    const productId = this.route.snapshot.paramMap.get('id');
    
    if (productId) {
      this.getProductById(Number(productId));
    }
  }

  // Funzione per ottenere il prodotto tramite id
  getProductById(id: number): void {
    this.productsService.filterProductsById(id).subscribe(
      (res) => {
        this.product = res;
        console.log("prodotto:",this.product)
      },
      (error) => {
        this.errorMessage = 'Errore nel recupero del prodotto. Riprova più tardi.';
        console.error('Errore:', error);
      }
    );
  }


  decrease(){
    if(this.quantity > 1){
      this.quantity--;
    }
  }

  increase(){
    this.quantity++;
  }

  selectSize(){
    this.size = !this.size;
  }

  addItem(){
    if(this.size){
      console.log('guanti aggiunti al carrello')
    }
  }
}
