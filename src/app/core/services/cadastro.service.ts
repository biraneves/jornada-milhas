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

  buscarCadastro(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/auth/perfil`);
  }

  editarCadastro(usuario: Usuario): Observable<Usuario> {
    return this.http.patch<Usuario>(`${this.apiUrl}/auth/perfil`, usuario);
  }
}
