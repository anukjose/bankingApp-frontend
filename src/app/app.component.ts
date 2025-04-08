import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for common directives
import { LoginComponent } from './login/login.component';
import { BalanceCheckComponent } from './balance-check/balance-check.component';
import { RouterOutlet, RouterLink } from '@angular/router'; // Import Router modules if routing is used

@Component({
  selector: 'app-root',
  standalone: true, // Mark as standalone component
  imports: [
    CommonModule, // Include CommonModule for common directives like ngIf, ngFor
    RouterOutlet, // Include RouterOutlet for routing
    RouterLink, // Include RouterLink for navigation
    LoginComponent, // Include LoginComponent
    BalanceCheckComponent // Include BalanceCheckComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'banking-frontend';
}
