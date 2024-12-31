import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // per ottenere l'id dalla route
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  product!: Product;
  errorMessage: string = '';
  quantity: number = 1;
  size: string = '';
  showError: boolean = false;
  showMessage: boolean = false;


  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute, private cartService: CartService
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
    this.showError = false;
    this.showMessage = false;
  }

  addToCart() {
    if(this.size){
       // Quando l'utente clicca su "Aggiungi al carrello", aggiorniamo il numero degli articoli nel carrello
      this.cartService.addItemToCart(this.product, this.quantity, this.size);
      this.product.quantity++;
      this.showError = false;
      this.showMessage = true;
    }else{
      this.showError = true;
    }
  }
}
