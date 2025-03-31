import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BalanceCheckComponent } from './balance-check/balance-check.component';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule to make HTTP requests
import { FormsModule } from '@angular/forms';  // Import FormsModule for two-way binding (ngModel)

@NgModule({
  declarations: [
    AppComponent,
    BalanceCheckComponent  // Declare BalanceCheckComponent here
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  // Import HttpClientModule here to make HTTP requests
    FormsModule        // Add FormsModule for ngModel two-way binding
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstraps the AppComponent as the main component
})
export class AppModule { }
