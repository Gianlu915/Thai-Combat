import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private authService: AuthService, private router: Router){
  }

  name: string = '';
  surname: string = '';
  email: string = '';
  password: string = '';
  isRegistered: boolean = false;



  onSubmitSignUp(signUpForm: any) {
    if (signUpForm.valid) {
      this.authService.setUserName(this.name);
      this.isRegistered = true;
      signUpForm.reset();
    }
  }


}
