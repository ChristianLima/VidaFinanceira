import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from '../model/usuario';
import { delay, first, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly API = '/assets/usuario.json';
  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Usuario[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(usuario => console.log(usuario))
    );
  }
}
