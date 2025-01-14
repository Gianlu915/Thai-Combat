import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginEmail: string = '';
  loginPassword: string = '';

  

  onSubmitLogin(loginForm: any) {
    if (loginForm.valid ) {
      console.log('Login submitted:', this.loginEmail, this.loginPassword);
    }
  }

}
