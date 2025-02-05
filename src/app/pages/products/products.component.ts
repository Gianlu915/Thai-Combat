import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  category: string = '';
  brand: string = '';
  products: Product[] = [];
  priceFilters: any = {}; // Stato per i filtri dei prezzi
  noProductsFound: boolean = false;
  private filterSubscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {

      // Sottoscrizione ai filtri
      this.filterSubscription = this.productsService.priceFilters$.subscribe(filters => {
        console.log('Filtri cambiati:', filters);  // Mostra i filtri quando cambiano
        this.priceFilters = filters;
        this.applyFilters();
      });
      
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

  applyFilters(): void {
    // Applica i filtri sui prodotti
    let filtered = [...this.products];
  
    // Controlla se almeno uno dei filtri è selezionato
    const isAnyFilterSelected = this.priceFilters.under50 || this.priceFilters['50to100'] || this.priceFilters.over100;
  
    // Filtra i prodotti in base ai filtri di prezzo, solo se sono selezionati
    if (this.priceFilters.under50) {
      filtered = filtered.filter(product => product.price < 50);
    }
    if (this.priceFilters['50to100']) {
      filtered = filtered.filter(product => product.price >= 50 && product.price <= 100);
    }
    if (this.priceFilters.over100) {
      filtered = filtered.filter(product => product.price > 100);
    }
  
    // Se nessun filtro è selezionato, carica tutti i prodotti
    if (!isAnyFilterSelected) {
      this.loadProducts();
    } else {
      // Se ci sono filtri selezionati, aggiorna i prodotti filtrati
      this.products = filtered;
      this.noProductsFound = filtered.length === 0;
    }
  }
}
