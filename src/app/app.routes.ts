import { Routes } from '@angular/router';

//import { LoginComponent } from './login/login.component';
//import { BalanceCheckComponent } from './balance-check/balance-check.component';
/*
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'balance', component: BalanceCheckComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];*/
export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'balance',
    loadComponent: () =>
      import('./balance-check/balance-check.component').then(m => m.BalanceCheckComponent)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
