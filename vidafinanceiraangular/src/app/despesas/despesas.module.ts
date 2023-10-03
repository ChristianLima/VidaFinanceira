import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DespesasRoutingModule } from './despesas-routing.module';
import { DespesasComponent } from './despesas/despesas.component';


@NgModule({
  declarations: [
    DespesasComponent
  ],
  imports: [
    CommonModule,
    DespesasRoutingModule
  ]
})
export class DespesasModule { }
