import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Usuario } from '../model/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent  implements OnInit{

  usuario$ : Observable<Usuario[]>;

  displayedColumns = ['name','cpf']

  //usuarioService: UsuarioService;

  constructor(
    private usuarioService: UsuarioService,
    public dialog: MatDialog
    ){
    // this.usuario = [];
    //this.usuarioService = new UsuarioService();
    this.usuario$ = this.usuarioService.list()
    .pipe(
      catchError(error => {
        this.onError(' Erro ao carregar Usuarios.');
        return of ([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

}
