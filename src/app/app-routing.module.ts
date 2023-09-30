import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioModule } from './usuario/usuario.module';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'usuario'},
  {
    path:'usuario',
    loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
