import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name: string = '';
  surname: string = '';
  email: string = '';
  password: string = '';



  // Metodo per gestire l'invio della registrazione
  onSubmitSignUp(signUpForm: any) {
    if (signUpForm.valid) {
     signUpForm.reset();
    }
  }
}
