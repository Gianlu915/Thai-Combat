import { Component, OnInit } from '@angular/core';
import { ShadowService } from '../../services/shadow.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  shadow: boolean = false; // Variabile che tiene traccia dello stato dell'ombra

  constructor(private shadowService: ShadowService) {}

  ngOnInit(): void {
    // Sottoscriviti per aggiornare lo stato quando cambia
    this.shadowService.shadowState$.subscribe((state) => {
      this.shadow = state; // Aggiorna lo stato dell'ombra
    });
  }
}
