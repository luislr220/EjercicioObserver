import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { ApiService } from '../services/api.service';

export const authGuard: CanActivateFn = (route, state) => {
  // Inyectar el servicio y el router utilizando `inject`
  const apiService = inject(ApiService);
  const router = inject(Router);

  // Comprobar si el usuario está autenticado
  if (apiService.isLoggedIn()) {
    return true; // Permitir el acceso si está autenticado
  } else {
    // Redirigir al login si no está autenticado
    router.navigate(['/']);
    return false;
  }
};
