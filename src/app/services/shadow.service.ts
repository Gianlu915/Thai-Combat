import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShadowService {
  private shadowState = new BehaviorSubject<boolean>(false); // Stato iniziale: ombra non visibile
  shadowState$ = this.shadowState.asObservable(); // Esponi come observable

  constructor() {}

  // Metodo per cambiare lo stato dell'ombra
  toggleShadow() {
    this.shadowState.next(!this.shadowState.value); // Inverti lo stato
  }
}
