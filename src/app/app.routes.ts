import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { VistaComentariosComponent } from './pages/vista-comentarios/vista-comentarios.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'comentarios',
    component: VistaComentariosComponent,
    canActivate: [authGuard],
  },
];
