import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';  
import { HttpClient, HttpHeaders } from '@angular/common/http';  

@Component({
  selector: 'app-balance-check',
  standalone: true,
  imports: [CommonModule, FormsModule],  
  templateUrl: './balance-check.component.html',
  styleUrls: ['./balance-check.component.css']
})
export class BalanceCheckComponent {
  balance: number = 0;
  accountId: number = 123;  // Default account ID
  username: string = "testuser";
  password: string = "password123";
  token: string | null = null;  // Store JWT token

  constructor(private http: HttpClient) {}

  /** 🔹 Step 1: Login to get JWT token **/
  login(): void {
    const loginPayload = { username: this.username, password: this.password };
    
    this.http.post(`http://localhost:8080/api/auth/login`, loginPayload, { responseType: 'text' })
      .subscribe(
        (response) => {
          this.token = response;  // Store the token
          console.log("Login successful! Token:", this.token);
        },
        (error) => {
          console.error("Login failed:", error);
        }
      );
  }

  /** 🔹 Step 2: Call checkBalance API with token **/
  checkBalance(): void {
    if (!this.token) {
      console.error("User not authenticated. Please login first.");
      return;
    }

    const headers = new HttpHeaders().set("Authorization", `Bearer ${this.token}`);

    this.http.get(`http://localhost:8080/api/banking/checkBalance?accountId=${this.accountId}`, 
      { headers: headers, responseType: 'text' }) 
      .subscribe(
        (response) => {
          this.balance = parseFloat(response);  
          console.log("Balance fetched:", this.balance);
        },
        (error) => {
          console.error("Error fetching balance:", error);
        }
      );
  }
}
