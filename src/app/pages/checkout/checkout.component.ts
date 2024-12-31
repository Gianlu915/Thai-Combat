import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  constructor(private cartService: CartService){}

  emailRegex: string = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";
  phoneRegex: string = "^[0-9]{10}$";
  cardNumberRegex: string = "^[0-9]{16}$";
  expirationDateRegex: string = "^(0[1-9]|1[0-2])\/([0-9]{2})$";
  cvvRegex: string = "^[0-9]{3,4}$";
  nameRegex: string = "^[A-Za-z]+$";

  // Variabili per i dati del form
  email: string = '';
  firstName: string = '';
  lastName: string = '';
  phone: string = '';
  company: string = '';
  address: string = '';
  apartment: string = '';
  city: string = '';
  province: string = '';
  postalCode: string = '';
  country: string = '';
  
  // Variabili per i dati della carta di credito
  cardNumber: string = '';
  cardholderName: string = '';
  expirationDate: string = '';
  cvv: string = '';

  // Variabili per il metodo di pagamento
  paymentMethod: string = 'creditCard';
  creditIsSelected: boolean = true;  // La carta di credito è selezionata di default
  palIsSelected: boolean = false;   // PayPal non è selezionato inizialmente

  products: Product[] = [];
  size: string = '';
  subtotal: number = 0;
  shipping: string = "10$";
  total: number = 0;

  ngOnInit(): void {
    // Recupera i prodotti dal carrello all'inizio
    this.products = this.cartService.getCart();
    this.calculateSubTotal();
    this.calculateTotal();
  }

  creditCard() {
    this.creditIsSelected = true;
    this.palIsSelected = false;
  }

  payPal() {
    this.creditIsSelected = false;
    this.palIsSelected = true;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted successfully');
      form.reset();
    } else {
      console.log('Form is not valid');
    }
  }

  getTotalForProduct(product: Product): number {
    return this.cartService.getTotalPriceForProduct(product);
  }

  calculateSubTotal(): void {
    this.subtotal = this.products.reduce((sum, product) => {
      return sum + this.getTotalForProduct(product);
    }, 0);
  }

  calculateTotal(){
  if(this.subtotal > 1 && this.subtotal< 100){
     this.total = this.subtotal + 10;
  }else if (this.subtotal > 100){
    this.total = this.subtotal;
    this.shipping = "Free";
  }
  }
}

