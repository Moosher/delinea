import { NgModule } from '@angular/core'
import { DetalheCandidatoComponent } from './detalhe-candidato/detalhe-candidato.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CandidatoComponent } from './candidato.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CandidatoComponent,
    DetalheCandidatoComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
  ],
})
export class CandidatoModule {

}
