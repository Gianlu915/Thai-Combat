import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductsComponent{
  
  @Input() product!: Product;
  
  
}
