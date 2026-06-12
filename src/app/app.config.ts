import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LoggerService } from './services/logger-service';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth/interceptor/auth-interceptor';
// import { uuid } from 'uuid';
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideToastr(),
    provideHttpClient(withInterceptors([authInterceptor])),
    // Ca c'est en cas ou la biblio n'offre pas la nouvelle manière de faire
    importProvidersFrom([

    ])
    // {
    //   provide: 'UUID',
    //   useValue: uuid
    // }
  ],
};
