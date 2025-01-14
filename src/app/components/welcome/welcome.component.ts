import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  constructor(private authService: AuthService){}

  userName: string = '';


  ngOnInit() {
    this.authService.userName$.subscribe(name => {
      this.userName = name;
    });
  }
}
