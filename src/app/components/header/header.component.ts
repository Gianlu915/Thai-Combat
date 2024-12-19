import { Component, ElementRef, ViewChild } from '@angular/core';
import { ShadowService } from '../../services/shadow.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor(private shadowService: ShadowService){}

  isSearchVisible = false;
  isShadowActive = false;
  isNavbarCollapsed = true;

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
