import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private authService: AuthService, private router: Router, private http: HttpClient){
  }

  name: string = '';
  surname: string = '';
  email: string = '';
  password: string = '';
  isRegistered: boolean = false;

  private apiUrl = "http://localhost:3000";



  onSubmitSignUp(signUpForm: any) {
    if (signUpForm.valid) {
      this.authService.setUserName(this.name);
      this.register();
      this.isRegistered = true;
      signUpForm.reset();
    }
  }

  register() {
    const userData = {
      name: this.name, 
      surname: this.surname, 
      email: this.email, 
      password: this.password
    };
  
    this.http.post(`${this.apiUrl}/users/register`, userData)
      .pipe(
        catchError(error => {
          console.error('Registration failed', error);
          return of({ message: 'Registration failed' });
        })
      )
      .subscribe(response => {
        console.log('Response:', response);
      });
  }
}



