import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Usuario, UsuarioEdicion, UsuarioPost } from '../interfaces';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class UserService {
  private url =  environment.apiURL;
  private http = inject(HttpClient);

  getUsuarios() : Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url}usuarios `);
  }

  getUsuario(usuario_id: number) : Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}usuarios/${usuario_id}`);
  }

  postUsuario( usuario: UsuarioPost ) : Observable<UsuarioPost> {
    return this.http.post<UsuarioPost>(`${this.url}usuarios`, usuario);
  }

  deleteUsuario( usuario_id: number ) : Observable<number> {
    return this.http.delete<number>(`${this.url}usuarios/${usuario_id}`);
  }

  putUsuario( id: number, usuario: UsuarioEdicion ) : Observable<UsuarioEdicion> {
    return this.http.put<UsuarioEdicion>(`${this.url}usuarios/${id}`, usuario);
  }

  searchUsuarios( q: string ) : Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url}usuarios/search`, { params: { q } });
  }

}