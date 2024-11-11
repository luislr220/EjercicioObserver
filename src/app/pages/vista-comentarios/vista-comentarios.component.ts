import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ListaComentarioComponent } from "../../components/lista-comentario/lista-comentario.component";
import { FormComentarioComponent } from "../../components/form-comentario/form-comentario.component";

@Component({
  selector: 'app-vista-comentarios',
  standalone: true,
  imports: [ListaComentarioComponent, FormComentarioComponent],
  templateUrl: './vista-comentarios.component.html',
  styleUrl: './vista-comentarios.component.css',
})
export class VistaComentariosComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  onLogout() {
    this.apiService.logout();
    this.router.navigate(['/']);
  }
}
