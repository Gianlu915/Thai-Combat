import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent{
  
  @Input() product!: Product;
  
  
}
