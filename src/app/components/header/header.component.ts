import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShadowService } from '../../services/shadow.service';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  @ViewChild('searchInput') searchInput!: ElementRef;

  isSearchVisible = false;
  isShadowActive = false;
  isNavbarCollapsed = true;
  cartItemCount: number = 0;
  userName: string = "";


  constructor(private shadowService: ShadowService, private cartService: CartService, private authService: AuthService){}
  
  ngOnInit(): void {
    this.cartService.cartItemCount$.subscribe(count => {
      this.cartItemCount = count;
    });

    this.authService.userName$.subscribe(name => {
      this.userName = name;
      console.log('Username aggiornato in HeaderComponent:', this.userName);
    });
  }

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

  logout() {
    this.authService.logoutUser();
    console.log("logout chiamato")
  }
  


}
