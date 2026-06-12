import { Injectable } from '@angular/core';
import { Credentials } from '../dto/credentials.dto';
import { Observable } from 'rxjs';
import { LoginResponseDto } from '../dto/login-response.dto';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  // Préparer l'authentification
  login(credentials: Credentials)
  //: Observable<LoginResponseDto>
  {
    // Appeler notre api de login
      // en cas de succes => récupérer le token (id) rediriger vers cv
      // en cas d'erreur toast erreur
  }
}
