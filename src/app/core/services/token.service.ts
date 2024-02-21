import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  salvarToken(token: string): void {
    localStorage.setItem(KEY, token);
  }

  excluirToken(): void {
    localStorage.removeItem(KEY);
  }

  retornarToken(): string | null {
    return localStorage.getItem(KEY);
  }

  possuiToken(): boolean {
    return !!this.retornarToken();
  }
}
