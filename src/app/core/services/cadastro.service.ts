import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/auth/cadastro`, usuario);
  }

  buscarCadastro(token: string): Observable<Usuario> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<Usuario>(`${this.apiUrl}/auth/perfil`, { headers });
  }

  editarCadastro(token: string, usuario: Usuario): Observable<Usuario> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.patch<Usuario>(`${this.apiUrl}/auth/perfil`, usuario, {
      headers,
    });
  }
}
