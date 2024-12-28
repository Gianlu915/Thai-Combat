import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShadowService } from '../../services/shadow.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor(private shadowService: ShadowService, private cartService: CartService){}
  
  ngOnInit(): void {
    this.cartService.cartItemCount$.subscribe(count => {
      this.cartItemCount = count;
    });
  }

  isSearchVisible = false;
  isShadowActive = false;
  isNavbarCollapsed = true;
  cartItemCount: number = 0;

  toogleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
    this.shadowService.toggleShadow();
    if(!this.isSearchVisible) {
      this.searchInput.nativeElement.value = '';
    }
  }

  closeNav():void{
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
    
  }

}
