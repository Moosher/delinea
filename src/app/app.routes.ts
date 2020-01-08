import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DetalheCandidatoComponent } from './candidato/detalhe-candidato/detalhe-candidato.component';
import { CandidatoComponent } from './candidato/candidato.component';

export const rootRouterConfig: Routes = [
    { path: '', component: AuthComponent },
    { path: 'candidato', component: CandidatoComponent, 
        children: [
            { path: 'editar', redirectTo: 'cadastrar' },
            { path: 'cadastrar', component: DetalheCandidatoComponent },
        ],
},
];

