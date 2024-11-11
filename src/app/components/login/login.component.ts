import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  contrasena: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private router: Router, private apiService: ApiService) {}

  onLogin() {
    if (!this.validarFormulario()) return;

    this.isLoading = true;
    this.errorMessage = '';

    this.apiService.postLogin(this.username, this.contrasena).subscribe({
      next: (respuesta) => {
        console.log(respuesta);
        const nombreUsuario = respuesta.usuario.nombre;
        const ID_usuario = respuesta.usuario.id;
        localStorage.setItem('nombreUsuario', nombreUsuario);
        localStorage.setItem('id_usuario', ID_usuario);
        this.router.navigate(['/comentarios']);
      },
      error: (error) => {
        console.error(error);
        this.errorMessage = error.error?.mensaje || 'Error al iniciar sesión';
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  onRegistro() {
    if (!this.validarFormulario()) return;

    this.isLoading = true;
    this.errorMessage = '';

    this.apiService.postRegistro(this.username, this.contrasena).subscribe({
      next: (respuesta) => {
        console.log(respuesta);
        this.onLogin();
      },
      error: (error) => {
        console.error(error);
        this.errorMessage = error.error?.mensaje || 'Error al registrarse';
        this.isLoading = false;
      },
    });
  }

  private validarFormulario(): boolean {
    if (!this.username || !this.contrasena) {
      this.errorMessage = 'Por favor complete todos los campos';
      return false;
    }
    if (this.contrasena.length < 5) {
      this.errorMessage = 'La contraseña debe tener al menos 5 caracteres';
      return false;
    }
    return true;
  }
}
