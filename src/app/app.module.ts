import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';  // Import RouterModule
import { AppComponent } from './app.component';
//import { LoginComponent } from './login/login.component';
//import { BalanceCheckComponent } from './balance-check/balance-check.component';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule to make HTTP requests
import { FormsModule } from '@angular/forms';  // Import FormsModule for two-way binding (ngModel)
import { routes } from './app.routes';
/*
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'balance', component: BalanceCheckComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
*/
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,  // Import HttpClientModule here to make HTTP requests
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes)        // Add FormsModule for ngModel two-way binding
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstraps the AppComponent as the main component
})
export class AppModule { }
