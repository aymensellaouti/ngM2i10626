import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Il faudra vérifier est ce que la personne a le droit ou non
  // d'accéder à la route

  // On retourne true pour dire tu passes; false sinon
  return true;
};
