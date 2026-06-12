import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { APP_CONST } from '../../config/constants.config';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // console.log('In Interceptor', req.url);
  const authService = inject(AuthService);
  if (authService.isAuthenticated()) {
     //2 Récupérer le token puis créer ou un param ou un header pour pouvoir supprimer
        const token = localStorage.getItem(APP_CONST.authToken) ?? '';
        // //const params = new HttpParams().set()
        // const headers = new HttpHeaders().set(APP_CONST.authHeaderName, token);
        const cloneReq = req.clone({
          setHeaders: {
            [APP_CONST.authHeaderName]: token
          }
        })
        return next(cloneReq);
  }
  return next(req);
};
