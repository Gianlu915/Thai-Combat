import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, of } from 'rxjs';
import { AuthService } from '../../services/auth.service';

interface User {
  name: string;
  email: string;
}

interface LoginResponse {
  message: string;
  user: User;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private http: HttpClient, private authService: AuthService){}

  email: string = '';
  password: string = '';
  access: boolean = false;
  userName: string = '';

  private apiUrl = "http://localhost:3000";

  ngOnInit() { }

  onSubmitLogin(loginForm: any) {
    if (loginForm.valid) {
      this.access = true;
      this.login();
    }
  }

  login() {
    const userData = {
      email: this.email,
      password: this.password
    };

    this.http.post<LoginResponse>(`${this.apiUrl}/users/login`, userData)
      .pipe(
        catchError(error => {
          console.error('Login failed', error);
          return of({ message: 'Login failed', user: { name: '', email: '' } });
        })
      )
      .subscribe(response => {
        console.log('Response:', response);
        
        // Ora puoi usare la risposta con il tipo LoginResponse
        if (response.message === 'Login successful') {
          this.userName = response.user.name;  // Imposta il nome dell'utente
          console.log('Welcome', this.userName);
        }
      });
  }
}
