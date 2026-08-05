import { importProvidersFrom } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { AppComponent } from './app.component';

export const appConfig = {
  providers: [
    importProvidersFrom(),
    provideRouter([], withEnabledBlockingInitialNavigation())
  ]
};
