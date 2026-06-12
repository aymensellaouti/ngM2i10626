import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { APP_ROUTES } from '../../config/app-routes.config';

export const authGuard: CanActivateFn = (route, state) => {
  // Il faudra vérifier est ce que la personne a le droit ou non
  // d'accéder à la route
  const authService = inject(AuthService);
  const router = inject(Router);
  if (!authService.isAuthenticated()){
    router.navigate([APP_ROUTES.login]);
    return false;
  }
  // On retourne true pour dire tu passes; false sinon
  return true;
};
