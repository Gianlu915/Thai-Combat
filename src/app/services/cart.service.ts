import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // Inizialmente, il carrello ha 0 articoli.
  private cartItemCount = new BehaviorSubject<number>(0);

    // Questo observable sarà utilizzato per ottenere il numero di articoli nel carrello.
    cartItemCount$ = this.cartItemCount.asObservable()

    constructor() {}

    addItemToCart(quantity: number) {
      if(quantity > 0){
        this.cartItemCount.next(this.cartItemCount.value + quantity);
      }
     
    }
}
