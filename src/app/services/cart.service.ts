import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItemCount = new BehaviorSubject<number>(0);
  private cart: Product[] = [];
  quantity:number = 0;

  // Observable per ottenere il numero di articoli nel carrello
  cartItemCount$ = this.cartItemCount.asObservable();

  constructor() {}

  addItemToCart(product: Product, quantity: number, size: string) {
    // Verifica se il prodotto esiste già nel carrello
    const existingProduct = this.cart.find(item => item.id === product.id && item.size === size);

    if (existingProduct) {
      // Se il prodotto esiste già, incrementa la sua quantità
      existingProduct.quantity += quantity;
    } else {
      // Se il prodotto non esiste, aggiungilo con la quantità
      const newProduct = { ...product, quantity, size };
      this.cart.push(newProduct);
    }

    // Aggiorna il numero totale di articoli nel carrello
    this.cartItemCount.next(this.cartItemCount.value + quantity);
  }

  // Ottieni il carrello
  getCart() {
    return this.cart;
  }

  // Rimuovi un prodotto dal carrello
  removeItemFromCart(productId: number, size: string) {
    const index = this.cart.findIndex(item => item.id === productId && item.size === size);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.cartItemCount.next(this.cartItemCount.value - 1);
    }
  }
}
