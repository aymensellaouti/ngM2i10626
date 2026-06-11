import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LoggerService } from './services/logger-service';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient } from '@angular/common/http';
// import { uuid } from 'uuid';
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideToastr(),
    provideHttpClient(),
    // Ca c'est en cas ou la biblio n'offre pas la nouvelle manière de faire
    importProvidersFrom([

    ])
    // {
    //   provide: 'UUID',
    //   useValue: uuid
    // }
  ],
};
