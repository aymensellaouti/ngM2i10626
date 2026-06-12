import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Credentials } from '../dto/credentials.dto';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../../config/app-routes.config';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  protected authService = inject(AuthService);
  protected toastr = inject(ToastrService);
  protected router = inject(Router);
  login(credentials: Credentials) {
    this.authService.login(credentials).subscribe({
      // en cas de succes => récupérer le token (id) rediriger vers cv
      next: (response) => {
        this.router.navigate([APP_ROUTES.cv]);
      },
      // en cas d'erreur toast erreur
      error: (e) => {
        this.toastr.error("Veuillez vérifier vos credentials")
      }
    });
  }
}
