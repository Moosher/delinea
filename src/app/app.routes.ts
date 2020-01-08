import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DetalheCandidatoComponent } from './candidato/detalhe-candidato/detalhe-candidato.component';
import { CandidatoComponent } from './candidato/candidato.component';
import { AuthGuard } from './auth/auth.guard';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: "login", pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'login', component: AuthComponent, canActivate: [AuthGuard] },
    { path: 'candidato', component: CandidatoComponent, canActivate: [AuthGuard],
        children: [
            { path: 'editar:id', redirectTo: 'cadastrar', canActivate: [AuthGuard] },
            
        ],
    },
    { path: 'cadastrar', component: DetalheCandidatoComponent },
];

