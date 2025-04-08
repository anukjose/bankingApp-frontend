import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';  // Import your routes

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),      // Configures routing (empty for now)
    provideHttpClient(),    // Enables HTTP client for API calls
    importProvidersFrom(FormsModule)  // Registers FormsModule for ngModel support
  ],
};
