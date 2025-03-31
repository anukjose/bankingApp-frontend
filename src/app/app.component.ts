import { Component } from '@angular/core';
import { BalanceCheckComponent } from './balance-check/balance-check.component';

@Component({
  selector: 'app-root',
  standalone: true,  // Required for Standalone Components
  imports: [BalanceCheckComponent],  // Import your new component
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'banking-frontend';
}
