import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL = 'https://back-observer-production.up.railway.app/api';

  constructor(private http: HttpClient) {}

  //=========================================================================================

  //METODO PARA INICIAR SESIÓN
  postLogin(nombre_usuario: string, contrasena: string): Observable<any> {
    const body = { nombre_usuario, contrasena };
    return this.http.post(`${this.API_URL}/usuarios/login`, body);
  }

  //METODO PARA REGISTRO EN EL SERVIDOR
  postRegistro(nombre_usuario: string, contrasena: string): Observable<any> {
    const body = { nombre_usuario, contrasena };
    return this.http.post(`${this.API_URL}/usuarios/registro`, body);
  }

  // Método para verificar si el usuario está autenticado
  isLoggedIn(): boolean {
    return !!localStorage.getItem('id_usuario');
  }

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('nombreUsuario');
    localStorage.removeItem('id_usuario');
  }

  //=========================================================================================

  //Aqui se realiza la logica de los comentarios
}
