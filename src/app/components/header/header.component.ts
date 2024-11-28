import { Component } from '@angular/core';
import { ShadowService } from '../../services/shadow.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private shadowService: ShadowService){}

  isSearchVisible = false;
  isShadowActive = false;

  toogleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
    this.shadowService.toggleShadow();
  }
}
