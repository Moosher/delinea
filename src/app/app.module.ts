import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { CandidatoModule } from './candidato/candidato.module';
import { AuthComponent } from './auth/auth.component';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './auth/auth.service';
import { CandidatoService } from './candidato/candidato.service';
import { AuthGuard } from './auth/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    CandidatoModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    AuthGuard,
    AuthService,
    CandidatoService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
