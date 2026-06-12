import { inject, Injectable } from '@angular/core';
import { Credentials } from '../dto/credentials.dto';
import { Observable, tap } from 'rxjs';
import { LoginResponseDto } from '../dto/login-response.dto';
import { HttpClient } from '@angular/common/http';
import { APP_API } from '../../config/app-api.config';
import { APP_CONST } from '../../config/constants.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  // Préparer l'authentification
  login(credentials: Credentials): Observable<LoginResponseDto>
  {
    // Appeler notre api de login
    return this.http.post<LoginResponseDto>(APP_API.login, credentials).pipe(
      tap((response) => {
        localStorage.setItem(APP_CONST.authToken, response.id);
      })
    );
  }
  logout() {
    localStorage.removeItem(APP_CONST.authToken);
  }
  isAuthenticated(): boolean {
    return !!localStorage.getItem(APP_CONST.authToken);
  }
}
