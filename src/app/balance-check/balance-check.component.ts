import { Component,OnInit } from '@angular/core';
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
export class BalanceCheckComponent implements OnInit{
  balance: number = 0;
  accountId: number = 123;  // Default account ID
  token: string | null = null;  // Store JWT token

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('BalanceCheckComponent initialized');
    this.token = localStorage.getItem('token');
    if (this.token) {
      console.log('Token found:', this.token);
    } else {
      console.log('No token found, redirecting to login');
    }
  }

  checkBalance(): void {
      console.log('BalanceCheckComponent loaded');
    if (!this.token) {
      console.error('User not authenticated. Please login first.');
      return;
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    
    this.http.get(`http://localhost:8080/api/banking/checkBalance?accountId=${this.accountId}`, 
      { headers: headers, responseType: 'text' })
      .subscribe(
        (response) => {
          this.balance = parseFloat(response);
          console.log('Balance fetched:', this.balance);
        },
        (error) => {
          console.error('Error fetching balance:', error);
        }
      );
  }
}
