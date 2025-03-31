import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngIf and currency pipe
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel
import { HttpClient } from '@angular/common/http';  // For API calls

@Component({
  selector: 'app-balance-check',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Add required modules here
  templateUrl: './balance-check.component.html',
  styleUrls: ['./balance-check.component.css']
})
export class BalanceCheckComponent {
  balance: number = 0;
  accountId: number = 123;  // Default account ID

  constructor(private http: HttpClient) {}

  checkBalance(): void {
    this.http.get(`http://localhost:8080/api/banking/checkBalance?accountId=${this.accountId}`, { responseType: 'text' }) 
      .subscribe(
        (response) => {
          this.balance = parseFloat(response);  // Convert response to a number
        },
        (error) => {
          console.error("Error fetching balance:", error);
        }
      );
  }
}
