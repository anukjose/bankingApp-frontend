import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms'; 
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  token: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  login(): void {
    console.log('Login attempt started');  // Log at the beginning of the login process
    const loginPayload = { username: this.username, password: this.password };
    console.log('Login Payload:', loginPayload);  // Log the data being sent to the server
    this.http.post('http://localhost:8080/api/auth/login', loginPayload, { responseType: 'text' })
      .subscribe(
        (response) => {
          console.log('Login successful');  // Log if login is successful
          console.log('Received token:', response);  // Log the token received from the backend
          this.token = response;  // Store the token
          localStorage.setItem('token', this.token);  // Store token in localStorage
          console.log('Token stored in localStorage:', this.token);  // Log token storage
          console.log('Navigating to /balance');
          this.router.navigate(['/balance']).then(() => {
            console.log('Navigation to /balance was successful');
          }).catch((error) => {
            console.error('Navigation to /balance failed:', error);
          });
                },
        (error) => {
          console.error("Login failed:", error);
          alert("Invalid username or password! Please try again.");  // User feedback on login failure
        }
      );
  }
}
