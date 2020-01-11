import { NgModule } from '@angular/core'
import { DetalheCandidatoComponent } from './detalhe-candidato/detalhe-candidato.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CandidatoComponent } from './candidato.component';
import { RouterModule } from '@angular/router';
import { ListagemCandidatoComponent } from './listagem-candidato/listagem-candidato.component';
import { DependenciesModule } from '../dependencies/dependencies.module';

@NgModule({
  declarations: [
    CandidatoComponent,
    DetalheCandidatoComponent,
    ListagemCandidatoComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule,
    DependenciesModule
  ],
  providers: [
  ],
})
export class CandidatoModule {

}
